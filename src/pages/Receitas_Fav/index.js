import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import '../../style.css'
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ReceitaFav(){

    const [receita, setReceita] = useState([])

    useEffect(()=>{
  
      const minhaLista = localStorage.getItem("minhasreceitas");
      setReceita(JSON.parse(minhaLista) || [])
  
    }, [])
  
  
    function excluirReceita(id){
      let filtroreceita = receita.filter( (item) => {
        return (item.id !== id)
      })
  
      setReceita(filtroreceita);
      localStorage.setItem("minhasreceitas", JSON.stringify(filtroreceita) )
      toast.success("Receita removida com sucesso")
    }
    
    return(
        <Container fluid className="conteudo">

            <Header/>

            <main className="conteudo-principal-receita">
                <h1>Minhas receitas</h1>
                {receita.length === 0 && <span>Você não possui nenhuma Receita salva!</span>}

                <ul>
                    {receita.map((item) => {
                    return(
                        <li key={item.id}>
                        <Row fluid className="conteudo-principal-receitas d-flex">
                                <Col md={3}>
                                    <img height={130} width={200} src={item.image}/>
                                </Col>
                                <Col md={6} className="conteudo-principal-receitas-text">
                                    <h2>{item.titulo}</h2>
                                    <p>{item.rendimento}</p>
                                    <p>{item.tempopreparo}</p>
                                </Col>
                                <Col  className="botao botao-fav">
                                    <Link to={`/receita/${item.id}`} className="link-receitafav">Ver Receita</Link>
                                    <button onClick={() => excluirReceita(item.id) } className="btn">Excluir</button>
                                </Col>
                            </Row>
                        </li>
                    )
                    })}
                </ul>

                <Col>
                    <Link to={'/'}><button className="btn">Voltar</button></Link>
                </Col>
            </main>

            <Footer/>

        </Container>
    )
}