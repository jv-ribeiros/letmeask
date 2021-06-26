import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { database } from "../../../services/firebase";
import deleteImg from "../../../assets/images/delete.svg";
import { Container } from "./styles";

type ModalTypes = {
  question: {
    id: string;
    content: string;
  };
};

type Params = {
  id: string;
};

export default function DeleteQuestionModal(props: ModalTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const params: Params = useParams();
  const roomId = params.id;
  const id = props.question.id;

  async function handleDeleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${id}`).remove();
    toast.success("Question deleted.");
  }

  return (
    <Container>
      <button className="visible" type="button" onClick={() => setIsOpen(true)}>
        <img src={deleteImg} alt="Remove answer" />
      </button>
      <div className={`${isOpen ? "bg" : ""}`}></div>
      <div className={`modal ${isOpen ? "opened" : "closed"}`}>
        <h1 className="icon">X</h1>
        <p>Tem certeza que deseja deletar essa pergunta?</p>
        <div>
          <button onClick={() => setIsOpen(false)} className="cancel">
            Cancelar
          </button>
          <button onClick={handleDeleteQuestion} className="confirm">
            Go it!
          </button>
        </div>
      </div>
    </Container>
  );
}
