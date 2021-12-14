import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Tecnica({ tecnica }) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/tecnica/${tecnica._id}`}>
                <Card.Img src={tecnica.image} />
            </a>

            <Card.Body>
                <a href={`/tecnica/${tecnica._id}`}>
                    <Card.Title as="div">
                        <strong>{tecnica.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className='my-2'>
                    <Rating value={tecnica.rating} text={`${tecnica.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${tecnica.price}
               </Card.Text>

            </Card.Body>
        
        </Card>
    )
}

export default Tecnica
