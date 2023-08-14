import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/index';
import Receita from './pages/Receitas/index';
import ReceitaFav from './pages/Receitas_Fav/index';
import AddReceita from "./pages/Add_Receitas";

import './style.css';
import Erro from "./pages/Erro";


export default function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/receita/:id" element={<Receita/>}/>
                <Route path="/receitasfav" element={<ReceitaFav/>}/>
                <Route path="/addreceita" element={<AddReceita/>}/>

                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}