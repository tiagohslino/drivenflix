export default function Topo() {

    // const nome = prompt("Qual seu nome?");
    const nome = "Usuario";
    const imagemUsuario = "https://media.istockphoto.com/id/1162440985/pt/vetorial/user-profile-icon-flat-red-round-button-vector-illustration.jpg?s=612x612&w=0&k=20&c=utyHx8WLEWEMSvhWQ4Hq0P-UFtoBJ6x7j2PwPYgQ5xg=";

    return (
        <div class="topo">
            <h1>Drivenflix</h1>
            <div>
                <button>Inserir nome</button>
                <p>{!nome ? "Seja bem-vindo(a) ao site!" : `Seja bem-vindo(a), ${nome}!`}</p>
                <img height="50px" src={imagemUsuario} />
            </div>
        </div>
    )
}