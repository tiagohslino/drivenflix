export default function Menu() {
    return (
        <ul class="menu">
            <MenuItem texto="Home" imagem="https://www.seekpng.com/png/full/375-3752606_homepage-icon-house-logo-png-white.png" link="./home.html" />
            <MenuItem texto="Favoritos" imagem="https://icon-library.com/images/white-heart-icon-png/white-heart-icon-png-11.jpg" link="./favoritos.html" />
            <MenuItem texto="Contato" imagem="https://i.im.ge/2022/09/15/1X4f74.envelope.png" link="./contato.html" />
        </ul> 
    )
}

function MenuItem(props) {

    const texto = "Home";
    const img = "https://www.seekpng.com/png/full/375-3752606_homepage-icon-house-logo-png-white.png";
    const link = "./home.html";

    return (
        <li>
            <img src={props.imagem} />
            <a href={props.link}>{props.texto}</a>
        </li> 
    )
}