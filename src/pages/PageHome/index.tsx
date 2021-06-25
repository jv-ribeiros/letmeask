import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

// import "../styles/auth.scss";
import { CustomButton } from "../../components/Buttons";
import { useAuth } from "../../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database } from "../../services/firebase";

import { Container } from "./styles";

export function PageHome() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoimRoom(e: FormEvent) {
    e.preventDefault();
    if (roomCode.trim() === "") {
      return;
    }
    const roomRef = await database.ref(`/rooms/${roomCode}`).get();
    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }
    if (roomRef.val().endedAt) {
      alert("Room already closed.");
      return;
    }
    history.push(`/rooms/${roomCode}`);
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
            <button onClick={handleCreateRoom} className="create-room">
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form onSubmit={handleJoimRoom}>
              <input autoFocus type="text" placeholder="Digite o código da sala" onChange={e => setRoomCode(e.target.value)} />
              <CustomButton type="submit">Entrar na sala</CustomButton>
            </form>
          </div>
        </main>
      </div>
    </Container>
  );
}
