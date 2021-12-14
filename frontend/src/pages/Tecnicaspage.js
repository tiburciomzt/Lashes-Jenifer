import React from 'react'
import tecnicas from '../tecnicas'
import { Row, Col } from 'react-bootstrap'
import Tecnica from '../components/Tecnica'

function Tecnicaspage() {
    return (
        <div>
            <h1>Últimas Técnicas del mes</h1>
            <Row>
                {tecnicas.map(tecnica =>(
                    <Col key={tecnica._id} sm={12} md={6} lg={4} xl={3}>
                    <Tecnica tecnica={tecnica}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Tecnicaspage
