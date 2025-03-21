export default function Topo() {
    let nome = "";
    const imagemUsuario = "https://media.istockphoto.com/id/1162440985/pt/vetorial/user-profile-icon-flat-red-round-button-vector-illustration.jpg?s=612x612&w=0&k=20&c=utyHx8WLEWEMSvhWQ4Hq0P-UFtoBJ6x7j2PwPYgQ5xg=";

    function inserirNome() {
        nome = prompt("Qual é seu nome?");
    }

    return (
        <div class="topo">
            <h1>Drivenflix</h1>
            <div>
                <button onClick={inserirNome}>Inserir nome</button>
                <p>{!nome ? "Seja bem-vindo(a) ao site!" : `Seja bem-vindo(a), ${nome}!`}</p>
                <img onClick={() => alert("Clicou na imagem")} height="50px" src={imagemUsuario} />
            </div>
        </div>
    )
}