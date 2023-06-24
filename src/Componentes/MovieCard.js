import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
 

function MovieCard({ chouf }) {

  return (
   <div>  
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={chouf.posterURL} />
      <Card.Body>
        <Card.Title>{chouf.name}  </Card.Title>
        <ReactStars
            count={10}
            size={20}
            isHalf={true}            
            activeColor="#ffd700"
            value={chouf.rating}
            edit={false}
             />
          <Card.Text>
          {chouf.rating}
          <hr />
          {chouf.description}

        </Card.Text>
        <Button variant="primary">Go 4 trailer</Button>
      </Card.Body>
    </Card>
 
    </div>
  );
}

export default MovieCard