import { FormEvent, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import LogoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import '../styles/room.scss';
import toast, { Toaster } from 'react-hot-toast';
import { database } from '../services/firebase';

type FirebaseQuestionsProps = Record<string, {
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isHighlighted:boolean;
    isAnswered: boolean;
}>

type QuestionProps = {
    id:string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isHighlighted:boolean;
    isAnswered: boolean;
}

type RoomParamsProps = {
    id: string;
}

export function Room() {
    const {user} = useAuth();
    const params = useParams<RoomParamsProps>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestionsProps = databaseRoom.questions ?? {}

            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted:value.isHighlighted,
                    isAnswered: value.isAnswered
                }
            })

            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions)
        })
    }, [roomId]);

    function sendForm(event: FormEvent) {
        event.preventDefault()
        toast.promise(handleSendQuestion(event),
            {
                loading: 'Saving...',
                success: <b>Perunta enviada!</b>,
                error: <b>Perunta não enviada.</b>,
            }
        )
    }

    async function handleSendQuestion(event: FormEvent) {
        if (newQuestion.trim() === '') {
            toast.error('Você não digitou a pergunta.');
            return;
        }

        if (!user) {
            toast.error('Você não se logou com o seu usuário.');
        }
        setTimeout(()=>{}, 5000);
        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user?.avatar
            },
            isHighlighted:false,
            isAnswered: false
        };
        
        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={LogoImg} alt="LetMeAsk" />
                    <RoomCode code={roomId} />
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 &&  <span>{questions.length} perguntas</span>}
                </div>

                <form onSubmit={sendForm}>
                    <textarea 
                        placeholder="O que você quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />

                    <div className="form-footer">
                        {user ? (
                            <div className="user-info">
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </div>
                        ) : (
                            <span>Para enviar a pergunta, <button>faça seu login</button>.</span>
                        )}
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                        <Toaster   
                            position="top-center"
                            reverseOrder={false} 
                        />
                    </div>
                </form>

                {JSON.stringify(questions)}
            </main>
        </div>
    );
}