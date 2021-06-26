import { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { database } from "../../../services/firebase";
import { CustomButton } from "../../Buttons";
import { Container } from "./styles";

type ModalTypes = {
  roomId: string;
};

export function EndRoom(props: ModalTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const id = props.roomId;

  async function handleEndRoom() {
    await database.ref(`rooms/${id}`).update({
      endedAt: new Date(),
    });
    setIsOpen(false);
    history.push("/");
    toast.success("The room was ended.");
  }
  return (
    <Container>
      <div onClick={() => setIsOpen(!isOpen)}>
        <CustomButton isOutlined>Encerrar Sala</CustomButton>
      </div>
      <div className={`${isOpen ? "bg" : ""}`}></div>
      <div className={`modal ${isOpen ? "opened" : "closed"}`}>
        <h1 className="icon">X</h1>
        <h2>Encerrar Sala</h2>
        <p>Tem certeza que você deseja encerrar esta sala?</p>
        <div>
          <button onClick={() => setIsOpen(false)} className="cancel">
            Cancelar
          </button>
          <button onClick={handleEndRoom} className="confirm">
            Sim, encerrar!
          </button>
        </div>
      </div>
    </Container>
  );
}
