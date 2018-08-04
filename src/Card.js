import React from 'react';

const Card = ({ title, director }) => {
  return (
    <div className='tc bg-black dib br3 ba b--yellow pa3 ma2 grow bw2 shadow-5' >
      <div className='text color red'>
        <h2>{ title }</h2>
        <p>{ director }</p>
      </div>
    </div>
  );
}

export default Card;
