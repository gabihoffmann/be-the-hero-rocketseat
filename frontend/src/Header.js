import React from 'react';

//criando o componente Header{propridades, descentralizadas}
export default function Header({children}){
    return (
        //tag HTML que será redenrizado
        <header>
            <h1>{children}</h1>
        </header>
    )
}