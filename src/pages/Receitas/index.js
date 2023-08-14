import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import api from "../../services/api";
import '../../style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";

export default function Receita(){
    const { id } = useParams();
    const navigate = useNavigate();

    const[carregando, setCarregando] = useState(true);
    const[receita, setReceita] = useState([]);


    useEffect(() =>{
        async function loadReceita(){
            await api.get(`/receitas/${id}`)
            .then((resposta) => {
                console.log(resposta.data);
                setReceita(resposta.data);
                setCarregando(false);
            })
            .catch(()=>{
                console.log("FILME NAO ENCONTRADO");
                navigate("/");
                return;
            })
        }
        loadReceita();
    }, [navigate, id])

    function salvarReceita(){
        const minhaReceita = localStorage.getItem("minhasreceitas");
    
        let receitasSalvas = JSON.parse(minhaReceita) || [];
    
        const hasReceita = receitasSalvas.some( (receitasSalva) => receitasSalva.id === receita.id)
    
        if(hasReceita){
          alert("Essa receita já está nos seus favoritos")
          return;
        }
    
        receitasSalvas.push(receita);
        localStorage.setItem("minhasreceitas", JSON.stringify(receitasSalvas));
        alert("Receita salva com sucesso!")
    
      }

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

            <main className="conteudo-principal-receita">
                <div>
                    <Row>
                        <Col>
                            <img className="img-receita" height={360} width={390} src={receita.image}/>
                        </Col>
                        <Col className="conteudo-principal-receita-text">
                            <div className="conteudo-primeiro">
                                <h2 className="receita-titulo">{receita.titulo}</h2>
                                <div className="d-flex">
                                    <Col className="preparo">
                                        <p>{receita.tempopreparo}</p>
                                    </Col>
                                    <Col className="rendimento">
                                        <p>{receita.rendimento}</p>
                                    </Col>
                                </div>  
                            </div>
                            <div className="conteudo-ingredientes">
                                <h3>Ingredientes:</h3>
                                <ul className="lista-ingredientes">
                                    {receita.ingredientes.map((ingrediente, index) => (
                                    <li key={index}>{ingrediente}</li>
                                    ))}
                                </ul>  
                            </div>
                        </Col>
                    </Row>
                    <div className="modo-preparo">
                        <h3>Modo de Preparo:</h3>
                        <p className="modopreparo-text">{receita.mododepreparo}</p>
                    </div>
                    <div>
                        <Row className="botoes">
                            <Col>
                                <Link to={'/'}><button className="btn">Voltar</button></Link>
                            </Col>
                            <Col>
                                <button onClick={salvarReceita} className="btn">Favoritar</button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </main>

            <Footer/>

        </Container>
    )
}