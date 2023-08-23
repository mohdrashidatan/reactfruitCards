import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Routes, Route, Link } from "react-router-dom";

import {items} from './data.js'

const goToCardDetails =() =>{
alert('clicked')

}

function HomePage () {
    return ( 
        <div className="container">
            <h1 className="text-center">Browse Items:</h1>

            {Object.entries(items).map(item => (
                <div>
                    <Container>
                        {/* <Row classname='justify-content-md-center>'> */}
                            <Col xs md='3'>
                            <Link to = 'Header/${item}' >
                            <Card style={{ width: '18rem' } }>
                                <Card.Img variant="top" src={item[1].imageSrc} onclick={goToCardDetails} />
                                <Card.Body>
                                    <Card.Title className="text-center">{item[1].name}</Card.Title>
                                    <Card.Text>
                                        <p className="text-center">{item[1].latinName}</p>

                                        {/* <p>{item[1].description}</p>
                                <p>{item[1].countryOfOrigin}</p>
                                <p>{item[1].sellerId}</p>
                                <p>{item[1].price}</p>
                                <p>{item[1].quantity}</p> */}

                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                            </Link>
                            </Col>
                        {/* </Row> */}
                    </Container>
                </div>
            ))}
        </div>
        
     );
}

export default HomePage