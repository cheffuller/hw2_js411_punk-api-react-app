import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ToggleLike from './ToggleLike';

export default function Beer({ beer }) {
  return (
    // <div>
    //   <span>
    //     {beer.name} - {beer.tagline}
    //     {console.log(beer)}
    //   </span>
    // </div>
    <Card className="Card" style={{ width: '14rem' }}>
      <Card.Img className='Card-img' variant='top' src={beer.image_url} />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>{beer.tagline}</Card.Text>
        {/* <Button variant='primary'>Go somewhere</Button> */}
        <ToggleLike>Like</ToggleLike>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
    </Card>
  );
}
