import React, { useState } from 'react';

const App = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleClick = () => {
    setText('changed in the browser!');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>change text!</button>
    </div>
  );
};

export default App;
