
import Card from 'react-bootstrap/Card';

function CardImage(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title> {props.titulo} </Card.Title>
        <Card.Text>
          {props.texto}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardImage;