import { FormEvent } from 'react';
import {Link, useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { database } from '../services/firebase';

export function NewRoom(){
    const { user } = useAuth()
    const history = useHistory()
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        console.log('test------------=-========-=--=-=--')
        if (newRoom.trim() === '') {
            return
        }
        
        const roomRef = database.ref('rooms');
        
        console.log(roomRef)
        console.log(newRoom)
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id, 
        })

        history.push(`/room/${firebaseRoom.key}`)
    } 

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas." />
                <strong>Create real time Q&amp;A room chats</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <h2>Criar uma nova sala</h2>
                    {/* Não coloca no clique do botão pq agente quer que execute se o usuário apertar enter */}
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala" 
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    );
}
