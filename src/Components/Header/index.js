import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import './style.css'
import Logo from '../../assets/—Pngtree—food logo_8466881.png'
import { Link } from 'react-router-dom';

export default function Header(){


    return(
        <Container fluid className='conteudo-navbar'>
            <Navbar className=" content-nav">
                <Nav.Item className='nav-cont'>
                    <Navbar.Brand>
                        <img width={130} src={Logo}/>
                    </Navbar.Brand>
                    <Navbar.Text className='titulo'> Grupo Genérico </Navbar.Text>
                </Nav.Item>
                <Nav.Item className='icones'>
                    <Link className='link' to={'/receitasfav'}>Minhas Receitas</Link>
                    <InstagramIcon className='icon'/>
                    <FacebookIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                </Nav.Item>
            </Navbar>
        </Container>
    )
}