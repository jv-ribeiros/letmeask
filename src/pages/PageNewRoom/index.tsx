import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { CustomButton } from "../../components/Buttons";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { Container } from "./styles";

// import "../styles/auth.scss";

export function PageNewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState("");
  async function handleCreateRoom(e: FormEvent) {
    e.preventDefault();
    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    history.push(`/admin/rooms/${firebaseRoom.key}/${user?.id}`);
  }
  return (
    <Container>
      <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="Illustração simbolizando perguntas e respostas" />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <h2>Criar uma nova sala</h2>
            <form onSubmit={handleCreateRoom}>
              <input type="text" placeholder="Nome da sala" onChange={e => setNewRoom(e.target.value)} />
              <CustomButton type="submit">Criar sala </CustomButton>
            </form>
            <p>
              Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
            </p>
          </div>
        </main>
      </div>
    </Container>
  );
}
