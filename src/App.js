import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import CardImage from './components/CardImage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header titulo="Galeria de imagenes"></Header>
      <Container>
        <Row>
          <Col>
            <CardImage titulo="Animales" texto="Todo tipo de animales" img="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg" ></CardImage>
          </Col>
          <Col>
            <CardImage titulo="humanos" texto="algunos humanos" img="https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg"></CardImage>
          </Col>
          <Col>
            <CardImage titulo="Tierra" texto="Nuestro planeta" img="https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_960_720.jpg"></CardImage>
          </Col>
        </Row>
      </Container>
      <Footer titulo="Todos los derechos reservados! @ 2022" texto="Revisa mas aqui"></Footer>
    </div>
  );
}

export default App;
