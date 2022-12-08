import {Button} from 'react-bootstrap';

const Footer = (props) => {
  return (
    <div    className='footer'>
        <p> {props.titulo} </p>
        <Button variant="primary"> {props.texto} </Button> 
    </div>
  )
}

export default Footer;