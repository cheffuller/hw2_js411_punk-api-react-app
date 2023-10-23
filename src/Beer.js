import Card from 'react-bootstrap/Card';
import ToggleHeart from './ToggleHeart';
import BeerPopup from './BeerPopup';

export default function Beer({ beer }) {

  return (
    <Card className='Card' style={{ width: '14rem' }}>
      <Card.Img className='Card-img' variant='top' src={beer.image_url} />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>{beer.tagline}</Card.Text>
        <BeerPopup beer={{ ...beer }}>Read More</BeerPopup>
        <br />
        <ToggleHeart></ToggleHeart>
      </Card.Body>
    </Card>
  );
}