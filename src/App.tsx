import React from 'react';

function App() {
  let a: number | null = 10;

  a = null;

  let names: Array<string> = ['1', '2', '3'];
  type adressType = {
    city: string | null;
    index: number | null;
  };
  type objTypes = {
    name: string | null;
    age: number | null;
    adress: adressType | null;
  };
  const obj = {
    name: 'dima',
    age: 12,
    adress: {
      city: 'kiyv',
      index: 12345,
    },
  };
  return <div className="App"></div>;
}

export default App;
