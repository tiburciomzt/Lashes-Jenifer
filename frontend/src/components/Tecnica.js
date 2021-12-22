import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Tecnica({ info_tecnica }) {
    return (
        <Card className="my-3 p-3 rounded"> 
            <Link to={`/tecnica/${info_tecnica._id}`}>
                <Card.Img src={info_tecnica.image} />
            </Link>

            <Card.Body>
                <Link to={`/tecnica/${info_tecnica._id}`}>
                    <Card.Title as="div">
                        <strong>{info_tecnica.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className='my-2'>
                    <Rating value={info_tecnica.rating} text={`${info_tecnica.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    ${info_tecnica.price}
               </Card.Text>
            </Card.Body>
        
        </Card>
    )
}

export default Tecnica
