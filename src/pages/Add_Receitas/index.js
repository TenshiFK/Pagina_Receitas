import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import '../../style.css'
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../services/api";

export default function AddReceita(){

    const [titulo, setTitulo] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [inputIngredientes, setInputigredientes] = useState('');
    const [mododepreparo, setMododepreparo] = useState('');
    const [image, setImage] = useState('');
    const [rendimento, setRendimento] = useState('');
    const [tempopreparo, setTempopreparo] = useState('');

    const AddIngrediente = () => {
        setIngredientes([...ingredientes, inputIngredientes]);
        setInputigredientes('');
      };

    function postReceitas(){
        api.post('receitas',{
            titulo,
            ingredientes,
            mododepreparo,
            image,
            rendimento,
            tempopreparo
        })
        setTitulo('');
        setIngredientes([]);
        setInputigredientes('');
        setMododepreparo('');
        setImage('');
        setRendimento('');
        setTempopreparo('');
        alert("Receita adicionada com sucesso")
    }
    
    return(
        <Container fluid className="conteudo">

            <Header/>

            <main className="conteudo-principal-receita">
                <h1>Adicionar Nova Receita</h1>

                <Container fluid>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label>Título da Receita:</Form.Label>
                                <Form.Control type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row className="margin">
                            <Col>
                                <Form.Label>Modo de preparo:</Form.Label>
                                <Form.Control as="textarea" rows={5} value={mododepreparo} onChange={(e) => setMododepreparo(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row className="margin">
                            <Col>
                                <Form.Label>Foto da receita:</Form.Label>
                                <Form.Control type="url" placeholder="URL da imagem" value={image} onChange={(e) => setImage(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row className="margin">
                            <Col>
                                <Form.Label>Tempo de Preparo:</Form.Label>
                                <Form.Control type="text" placeholder="Tempo de preparo: ...min" value={tempopreparo} onChange={(e) => setTempopreparo(e.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Label>Rendimento:</Form.Label>
                                <Form.Control type="text" placeholder="Rende até ... porções" value={rendimento} onChange={(e) => setRendimento(e.target.value)}/>
                            </Col>
                        </Row>
                        <Row className="margin">
                            <Col>
                                <ul>
                                    <p>Ingredientes adicionados:</p>
                                    {ingredientes.map((ingrediente, index) => (
                                        <li className="lista-ingre" key={index}>{ingrediente}</li>
                                    ))}
                                </ul>
                                <Form.Label>Ingredientes:</Form.Label>
                                <Form.Control type="text" placeholder="Ingredientes" value={inputIngredientes} onChange={(e) => setInputigredientes(e.target.value)}/>
                                <button className="btn margin" onClick={AddIngrediente}>Adicionar</button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Row className="botoes-adicionar-receitas">
                    <Col>
                        <Link to={'/'}><button className="btn">Voltar</button></Link>
                    </Col>
                    <Col>
                        <button onClick={postReceitas} className="btn">Adicionar Receita</button>
                    </Col>  
                </Row>

            </main>

            <Footer/>

        </Container>
    )
}

