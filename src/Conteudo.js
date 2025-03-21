export default function Conteudo() {

    const filmes = [
        {nome: "10 regras para salvar um casamento", imagem: "https://image.tmdb.org/t/p/w185/rcmoIeno4fh6QnNmg93TVNq8aj.jpg"},
        {nome: "Estado elétrico", imagem: "https://image.tmdb.org/t/p/w185/mUBxeBpI5xg66YhLJxg8Ppv0ArW.jpg"},
        {nome: "O agiota", imagem: "https://image.tmdb.org/t/p/w185/sdbAoj5akfFHj7dTDOpUIrTcHT1.jpg"},
        {nome: "O fim da lealdade", imagem: "https://image.tmdb.org/t/p/w185/sy1r4ABRjNrk6Xsp2hPnfhDPM7.jpg"},
        {nome: "Depravação", imagem: "https://image.tmdb.org/t/p/w185/n19vWwaN3NgxazMbxxNYn5h30EE.jpg"},
        {nome: "Batman Ninja vs Yakuza", imagem: "https://image.tmdb.org/t/p/w185/E0Kfd0UsphezvdhLVNtOTXzOLT.jpg"},
        {nome: "Tornado", imagem: "https://image.tmdb.org/t/p/w185/p91IMcRiHvDc1Ou8rDBdEIHZcli.jpg"},
        {nome: "De volta à ação", imagem: "https://image.tmdb.org/t/p/w185/m4gzzzeYRmrwasrBdJmjhBmjS3U.jpg"},
        {nome: "Oficina do diabo", imagem: "https://image.tmdb.org/t/p/w185/33ugYq5qlJTAiXkfIhdUSxQUTT8.jpg"},
        {nome: "Demolidor", imagem: "https://image.tmdb.org/t/p/w185/eODcpeaj6jFoVG1kBVpNFyFh45I.jpg"},
    ]

    return (
        <ul className="conteudo">
            {filmes.map((item, index) => <Filme nome={item.nome} imagem={item.imagem} key={index} />)}
        </ul>  
    )
}

function Filme(props){
    return (
        <li className="filme">
            <img src={props.imagem} />
            <p>{props.nome}</p>
        </li>
    )
}