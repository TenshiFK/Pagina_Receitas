import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Header from "../../Components/Header";
import { CarouselItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import '../../style.css';
import Img1 from '../../assets/macarrao.png';
import Img2 from '../../assets/temp (1).png';
import Footer from "../../Components/Footer";
import api from "../../services/api";


export default function Home(){
    const[receitas, setReceitas] = useState([]);
    const[carregando, setCarregando] = useState(true);

    useEffect(() =>{
        async function loadReceitas(){
            await api.get('receitas')
            .then((resposta) => {
                console.log(resposta.data);
                setReceitas(resposta.data);
                setCarregando(false);
            })
    
        }
        loadReceitas();
    }, [])

    if(carregando){
        return(
          <div className="loading">
            <h2>Carregando receitas...</h2>
          </div>
        )
      }


    return(
        <Container fluid className="conteudo">
            <Header/>

            <Carousel>
                <CarouselItem>
                    <img className="d-block w-100" src={Img1}/>
                </CarouselItem>
                <CarouselItem>
                    <img className="d-block w-100" src={Img2}/>
                </CarouselItem>
            </Carousel>
            <main className="conteudo-principal">
                <h1>Receitas</h1>
                {receitas.map((Receipt) => {
                    return(
                        <ul key={Receipt.id}>
                            <Row fluid className="conteudo-principal-receitas d-flex">
                                <Col md={3}>
                                    <img height={130} width={200} src={Receipt.image}/>
                                </Col>
                                <Col md={6} className="conteudo-principal-receitas-text">
                                    <h2>{Receipt.titulo}</h2>
                                    <p>{Receipt.rendimento}</p>
                                    <p>{Receipt.tempopreparo}</p>
                                </Col>
                                <Col  className="botao">
                                    <Link to={`/receita/${Receipt.id}`}><button className="btn">Ver Receita</button></Link>
                                </Col>
                            </Row>
                        </ul>
                    )
                })}

                <Link to={'/addreceita'}><button className="btn">Adicionar nova receita</button></Link>

            </main>

            <Footer/>
        </Container>
    )
}