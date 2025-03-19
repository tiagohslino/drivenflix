import { createRoot } from 'react-dom/client';
 
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

