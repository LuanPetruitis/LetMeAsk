import {useParams} from 'react-router-dom'
import LogoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import '../styles/room.scss';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';


type RoomParamsProps = {
    id: string;
}

export function AdminRoom() {
    const params = useParams<RoomParamsProps>();
    const roomId = params.id;

    const {questions, title} = useRoom(roomId);

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={LogoImg} alt="LetMeAsk" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 &&  <span>{questions.length} perguntas</span>}
                </div>
                

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}