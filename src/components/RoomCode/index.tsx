import copyImg from "../../assets/images/copy.svg";
// import "../styles/room-code.scss";
import { Container } from "./style";

type RoomCodeProps = {
  code: string;
};

export function CodeRoom(props: RoomCodeProps) {
  function copyRoomCodeToClipboar() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container>
      <button className="room-code" onClick={copyRoomCodeToClipboar}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
    </Container>
  );
}
