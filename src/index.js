import { createRoot } from `react-dom/client`;

function Topo() {
    return (
        <div class="topo">
            <h1>Drivenflix</h1>
            <div>
                <button>Inserir nome</button>
                <p>Bem-vindo(a), Fulana!</p>
                <img height="50px" src="https://media.istockphoto.com/id/1162440985/pt/vetorial/user-profile-icon-flat-red-round-button-vector-illustration.jpg?s=612x612&w=0&k=20&c=utyHx8WLEWEMSvhWQ4Hq0P-UFtoBJ6x7j2PwPYgQ5xg="></img>
            </div>
        </div>
    )
}

function Menu() {
    return (
        <ul class="menu">
            <li><a href="#">Home</a></li> 
            <li><a href="#">Favoritos</a></li> 
            <li><a href="#">Contato</a></li>    
        </ul> 
    )
}

function Conteudo() {
    return (
        <ul class="conteudo">
            <li>Senhor dos anéis: sociedade do anel</li>    
            <li>Senhor dos anéis 2</li>
            <li>Senhor dos anéis 3</li>
        </ul>  
    )
}
 
function App(){ //Não é HTML, mas JSX
    return (
        <div>
            <Topo />
            <div class="row">
                <Menu />
                <Conteudo />               
            </div>            
        </div>
    );
}

const root = createRoot(document.querySelector(".root"));
root.render(<App />);

// // function makeList (){
// //     return `
// //         <ul>
// //             <li>O senhor dos aneis 1</li>
// //             <li>O senhor dos aneis 2</li>
// //             <li>O senhor dos aneis 3</li>
// //         </ul>
// //     `;
// // }

// // const list = makeList();

// // const element = document.querySelector(".root");
// // element.innerHTML = list;

