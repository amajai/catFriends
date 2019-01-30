import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
  const catsArray = cats.map( (value, i) =>{
    return <Card key={cats[i].id} id={cats[i].id} name={cats[i].name} email={cats[i].email} />
  })
  return(
    <div>
      { catsArray }
    </div>
  );
}

export default CardList