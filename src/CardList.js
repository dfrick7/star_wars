import React from 'react';
import Card from './Card';

const FilmList = ({ films }) => {
  return (
    <div>
      {
        films.map((film, i) => {
          return (
            <Card
              key={i}
              id={films[i].id}
              title={films[i].title}
              director={films[i].director}
            />
          );
        })
      }
    </div>
 );
}

export default FilmList;
