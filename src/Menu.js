export default function Menu() {

    const menu = [
        {texto: "Home", imagem: "https://www.seekpng.com/png/full/375-3752606_homepage-icon-house-logo-png-white.png", link: "./home.html"},
        {texto: "Favoritos", imagem: "https://icon-library.com/images/white-heart-icon-png/white-heart-icon-png-11.jpg", link: "./favoritos.html"},
        {texto: "Contato", imagem: "https://i.im.ge/2022/09/15/1X4f74.envelope.png", link: "./contato.html"},
    ];
    
    return (
        <ul className="menu">
            {menu.map(item => <MenuItem texto={item.texto} imagem={item.imagem} link={item.link} key={item.texto} />)}
        </ul> 
    )
}

function MenuItem({imagem, link, texto}) {

    //DESTRUCTURING
    // const imagem = imagem.props; 
    // const link = link.props;
    // const texto = texto.props;
    
    return (
        <li>
            <img src={imagem} />
            <a href={link}>{texto}</a>
        </li> 
    )
}