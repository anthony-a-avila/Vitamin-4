import React, { useEffect, useState } from 'react';

export default function NotHome() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) setCount(0);
  }, [count]);

  return (
    <div className="not-home">
      <h1>Not Home Page</h1>
      <h2>Counter: {count}</h2>

      {count > 5 && <p>You passed 5!</p>}

      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button onClick={() => setCount(c => c + 1)}>Increase</button>
        <button onClick={() => setCount(c => c - 1)}>Decrease</button>
      </div>
    </div>
  );
}
