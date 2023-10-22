import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function ToggleLike({ beer }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ToggleButton
        className="mb-2"
        id={beer.id}
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Like
      </ToggleButton>
    </>
  );
}

