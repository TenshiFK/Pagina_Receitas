import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../style.css';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Erro(){
    <Container fluid>
        <Header/>

        <main>
            <h1>Ops, parece que essa página não foi encontrada</h1>
            <Link to={'/'}>Veja as receitas aqui!</Link>   
        </main>

        <Footer/>
        
    </Container>
}