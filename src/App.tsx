import React from 'react';

let a: number | null = 10;

a = null;

let names: Array<string> = ['1', '2', '3']
type adressType = {
  city: string | null
  index: number | null
}
type objTypes = {
  name: string | null
  age: number | null
  adress: adressType | null

}
const obj = {
  name: "dima",
  age: 12,
  adress: {
    city: 'kiyv',
    index: 12345,
  }
}


function App() {
  return (
    <div className="App"></div>
  );
}

export default App;
