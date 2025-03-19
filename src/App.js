import Topo from "./Topo";
import Menu from "./Menu";
import Conteudo from "./Conteudo";

export default function App(){ //Não é HTML, mas JSX
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
