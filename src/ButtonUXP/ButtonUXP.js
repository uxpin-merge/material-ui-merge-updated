import React, { useState } from "react";

export default function ButtonUXP() {
  const [count, setCount] = useState(0);

  return (
   <div>
      <h2>You clicked {count} times!</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
