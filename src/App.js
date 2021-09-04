import React, {useState} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

const App = (props) => {
  const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];


  return(
    <React.Fragment>
      <Header/>
      <Main meals={DUMMY_MEALS}/>
    </React.Fragment>
  )
}

export default App;
