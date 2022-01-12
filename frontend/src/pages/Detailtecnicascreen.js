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
                <Col md={5}>
                    <Image src={tecnic.image} alt={tecnic.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush' as='ul'>
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

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col><strong>${tecnic.price}</strong></Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Row>
                                    <Col>Status: </Col>
                                    <Col>{tecnic.countInStock >0 ? 'In stock' : 'Out stock' }</Col>
                                </Row>
                            </ListGroupItem>      

                            <ListGroupItem>
                                <Row>
                                <Button className='btn-block' type='button'>Hacer cita</Button>
                                </Row>
                            </ListGroupItem> 

                        </ListGroup>
                        
                    </Card>
                </Col>

            </Row>
        </div>
    )
    }
export default Detailtecnicascreen
