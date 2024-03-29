import { useNavigate } from "react-router-dom";

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss'
import { useAuth } from "../hooks/useAuth";

export function Home() {
    // Função para autenticar o usuario e redirecionar o usuario para página decriação de sala a partir de um button
    const navigate = useNavigate();
    const {user, signInWithGoogle} = useAuth()

        async function handleCreateRoom() {
            if (!user) {
                await signInWithGoogle()
            }
            navigate("/rooms/new")
        }
    // ###---### // ###---### // ###---### // ###---### 
    return (
        <div id='page-auth'>
            <aside>
                <div>
                    <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                    <strong>Crie salas de Q&amp;A ao vivo</strong>
                    <p>Tire as dúvidas da sua audiência em tempo-real</p>
                </div>
            </aside>
            <main className='main-content'>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input 
                        type="text" 
                        placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}