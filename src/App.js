import Topo from "./Topo";
import Menu from "./Menu";
import Conteudo from "./Conteudo";

export default function App(){ //Não é HTML, mas JSX
    return (
         // <> ou React fragment (necessita import React) 
        <>
        <Topo />
            <div className="row">
                <Menu />
                <Conteudo />               
            </div>            
        </>
    );
}
