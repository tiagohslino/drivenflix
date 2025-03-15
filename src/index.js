import ReactDOM from "react-dom";

function List (){
    return (
        <ul>
            <li>O senhor dos aneis 1</li>
            <li>O senhor dos aneis 2</li>
            <li>O senhor dos aneis 3</li>
        </ul>
    );
}

const reactList = List();
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

