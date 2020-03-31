import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';

import api from '../../services/api';
 
import  './styles.css';

import herosImg from '../../assets/heroes.png';
import herosLogo from '../../assets/logo.svg';

export default function Logon(){

    const [id , setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        //validar a existencia da ONG
        try{
            const response = await api.post('/sessions', {id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');
        }catch{
            alert('Erro no login - tente novamente')
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={herosLogo} alt="Logo Heroes"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value = {id}
                        onChange={e=> setId(e.target.value)}
                    ></input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={herosImg} alt="Heroes"/>
        </div>
        
    );
}