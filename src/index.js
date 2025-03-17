import ReactDOM from "react-dom";

function App(){
    return (
        <div>
            <div class="topo"></div>
            
        </div>
    );
}

const reactList = App();
const element = document.querySelector(".root");

ReactDOM.render(reactList, element);

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

