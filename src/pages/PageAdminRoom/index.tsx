import { useHistory, useParams } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import { CodeRoom } from "../../components/CodeRoom";
import { database } from "../../services/firebase";
import { Question } from "../../components/Questions";
import deleteImg from "../../assets/images/delete.svg";
import { Container } from "./styles";

// import "../styles/room.scss";
import { useRoom } from "../../hooks/useRoom";
import { CustomButton } from "../../components/Buttons";

type RoomParams = {
  id: string;
};

export function PageAdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    history.push("/");
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
            {questions.map(question => {
              return (
                <Question key={question.id} content={question.content} author={question.author}>
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
