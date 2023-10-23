import { useState } from 'react';
import Heart from 'react-heart';

export default function ToggleHeart() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        animationScale={1.25}
        style={{ width: '2rem' }}
      />
    </>
  );
}
