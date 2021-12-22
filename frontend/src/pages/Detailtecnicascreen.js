import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import tecnicas from '../tecnicas'
import  Rating from '../components/Rating'

function Detailtecnicascreen() {
    //PARAMS : VARIABLE PARA PODER COMPARAR EL ID DE LA URL CON EL ELEMENTO DEL ARRAY.
    let params= useParams();
    const tecnic = tecnicas.find((tec) => tec._id == params.id)
    return (
        <div>
            <Link to='/tecnicas' className='btn btn-light my-3'> Go back </Link>
            <Row>
                <Col md={6}>
                    <Image src={tecnic.image} alt={tecnic.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup as='ul'>
                        <ListGroupItem as='li' active> <h3>{tecnic.name}</h3></ListGroupItem>

                        <ListGroupItem>
                            <Rating value={tecnic.rating} text={`${tecnic.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroupItem>

                        <ListGroupItem >
                            Price: {tecnic.price}
                        </ListGroupItem>

                        <ListGroupItem >
                            Description: {tecnic.description}
                        </ListGroupItem>

                    </ListGroup>
                </Col>

            </Row>
        </div>
    )
    }
export default Detailtecnicascreen
