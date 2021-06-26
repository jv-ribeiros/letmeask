import { useHistory, useParams } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import { CodeRoom } from "../../components/RoomCode";
import { database } from "../../services/firebase";
import { Question } from "../../components/Questions";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";
import { Container } from "./styles";

// import "../styles/room.scss";
import { useRoom } from "../../hooks/useRoom";
import { CustomButton } from "../../components/Buttons";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

type RoomParams = {
  id: string;
  admin: string;
};

export function PageAdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const { user } = useAuth();
  const sortedQuestions = questions
    .sort((a, b) => b.likeCount - a.likeCount)
    .sort(a => (a.isAnswered ? 1 : 0))
    .sort(a => (a.isHighlighted ? -1 : 0));

  useEffect(() => {
    const roomRef = database.ref(`/rooms/${roomId}`);
    roomRef.once("value", room => {
      if (params.admin !== room.val().authorId) {
        history.push("/");
        toast.error(`You're not the room admin.`);
        return;
      }
      toast.success(`Welcome again, ${user?.name}`);
    });
  }, [params.admin, history, roomId, user?.name]);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    history.push("/");
    toast.success("The room was ended.");
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).remove();
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
      isHighlighted: false,
    });
  }

  async function handleHighligthQuestion(questionId: string) {
    const response = (await database.ref(`rooms/${roomId}/questions/${questionId}`).get()).child("isHighlighted").val();
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !response,
    });
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja executar esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <Container>
      <div id="page-room">
        <header>
          <div className="content">
            <img onClick={() => history.push("/")} src={logoImg} alt="Letmeask" />
            <div>
              <CodeRoom code={roomId} />
              <CustomButton isOutlined onClick={handleEndRoom}>
                Encerrar Sala
              </CustomButton>
            </div>
          </div>
        </header>
        <main className="content">
          <div className="room-title">
            <h1>Sala {title}</h1>
            {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
          </div>

          <div className="question-list">
            {sortedQuestions.map(question => {
              return (
                <Question
                  key={question.id}
                  content={question.content}
                  author={question.author}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {!question.isAnswered && (
                    <>
                      <button type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                        <img src={checkImg} alt="Check Img like answered" />
                      </button>
                      <button type="button" onClick={() => handleHighligthQuestion(question.id)}>
                        <img src={answerImg} alt="Spotlight answer" />
                      </button>
                    </>
                  )}

                  <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                    <img src={deleteImg} alt="Remove answer" />
                  </button>
                </Question>
              );
            })}
          </div>
        </main>
      </div>
    </Container>
  );
}
