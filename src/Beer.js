import Card from 'react-bootstrap/Card';
import ToggleLike from './ToggleLike';

export default function Beer({ beer }) {
  return (
    <Card className='Card' style={{ width: '14rem' }}>
      <Card.Img className='Card-img' variant='top' src={beer.image_url} />
      <Card.Body>
        <Card.Title>{beer.name}</Card.Title>
        <Card.Text>{beer.tagline}</Card.Text>
        <ToggleLike>Like</ToggleLike>
      </Card.Body>
    </Card>
  );
}