import React from 'react';
import ScrollableComponent from './ScrollableComponent';

const App = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
      <h1 className="text-4xl font-bold">Scrollable Component</h1>
      <ScrollableComponent items={items} />
    </div>
  );
};

export default App;
