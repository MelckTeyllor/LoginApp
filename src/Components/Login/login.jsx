import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";

import "./login.css"

const login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os Dados: " + userName + " - " + "password: **************")



        console.log("Dados de Login:", { userName, password });
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
           <div className="input-field">
           <input type="email" name="" id="" placeholder='Digite seu Email' onChange={(e) => setUserName(e.target.value)} value={userName} required/>
           <FaUser className="icon"/>
           </div>

            <div className="input-field">
            <input type="password" name="" id="" placeholder="Digite sua Senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
            <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
                <label> 
                    <input type="checkbox" name="" id="" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default login
