import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

export default function BeerPopup({ beer }) {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Header as='h3'>
        First Brewed - {beer.first_brewed}
      </Popover.Header>
      <Popover.Body>
        <p>{beer.description}</p>
        ABV - {beer.abv}
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger='click' placement='auto' overlay={popover}>
        <Button variant='outline-secondary'>Read More</Button>
      </OverlayTrigger>
    </div>
  );
}
