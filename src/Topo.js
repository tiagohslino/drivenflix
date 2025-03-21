import React from "react";

export default function Topo() {
    const imagemInicial = "https://media.istockphoto.com/id/1162440985/pt/vetorial/user-profile-icon-flat-red-round-button-vector-illustration.jpg?s=612x612&w=0&k=20&c=utyHx8WLEWEMSvhWQ4Hq0P-UFtoBJ6x7j2PwPYgQ5xg=";
    
    const [nome, setNome] = React.useState("");
    const [avatar, setAvatar] = React.useState(imagemInicial);
    
    function inserirNome() {
        const nomeDigitado = prompt("Qual é seu nome?");
        setNome(nomeDigitado);
    }

    function mudaImagem() {
        const linkDigitado = prompt("Digite o link da sua imagem");
        setAvatar(linkDigitado);
    }

    return (
        <div class="topo">
            <h1>Drivenflix</h1>
            <div>
                <button onClick={inserirNome}>Inserir nome</button>
                <p>{!nome ? "Seja bem-vindo(a) ao site!" : `Seja bem-vindo(a), ${nome}!`}</p>
                <img onClick={mudaImagem} height="50px" src={avatar} />
            </div>
        </div>
    )
}