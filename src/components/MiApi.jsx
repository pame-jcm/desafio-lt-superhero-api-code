import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Card, ProgressBar, Row, Col } from 'react-bootstrap';


const MiApi = ({SuperHeroFilter, OnClickDetalles}) => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        getAllSuperHero();
    }, [])

    const getAllSuperHero = async () =>{
        const url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
        const response = await fetch(url);
        const data = await response.json();
        
        setdata(data);
    }

    const onClickButton = (e) => {
        
        const id = e.target.getAttribute('superheroid')
        const superherobyid = data.find(superH => superH.id === parseInt(id));
        
        OnClickDetalles(superherobyid);
    }

  return (
    
        <Row xs={1} md={6} lg={8} className="g-4 m-4">

                { SuperHeroFilter === '' ? 
                        data.map((superhero, index) => {
                        return(
                            <Col key={`${superhero.name}-${index}`}>
                                <Card className='rounded-0'>
                                    <Card.Img variant="top" src={superhero.images.lg} className='rounded-0'/>
                                    <Card.Body>
                                        <Card.Title>{superhero.name}</Card.Title>
                                        
                                            <Row className="align-items-center">
                                                <Col style={{fontSize: 'smaller'}}>Intelligence</Col>
                                                <Col><ProgressBar striped variant="black" now={superhero.powerstats.intelligence} /></Col>
                                            </Row>
                                            
                                            <Row className="align-items-center">
                                                <Col style={{fontSize: 'smaller'}}>Strength</Col>
                                                <Col><ProgressBar striped variant="black" now={superhero.powerstats.strength} className="mb-1"/></Col>
                                            </Row>

                                            <Row className="align-items-center">
                                                <Col style={{fontSize: 'smaller'}}>Speed</Col>
                                                <Col><ProgressBar striped variant="black" now={superhero.powerstats.speed} className="mb-1"/></Col>
                                            </Row>

                                            <Row className="align-items-center">
                                                <Col style={{fontSize: 'smaller'}}>Durability</Col>
                                                <Col><ProgressBar striped variant="black" now={superhero.powerstats.durability} className="mb-1"/></Col>
                                            </Row>

                                            <Row className="align-items-center">
                                                <Col style={{fontSize: 'smaller'}}>Power</Col>
                                                <Col><ProgressBar striped variant="black" now={superhero.powerstats.power} className="mb-1"/></Col>
                                            </Row>

                                            <Row className="align-items-center">
                                                <Col style={{fontSize: 'smaller'}}>Combat</Col>
                                                <Col><ProgressBar striped variant="black" now={superhero.powerstats.combat} className="mb-1"/></Col>
                                            </Row>

                                        
                                        <Button variant="black" onClick={onClickButton} className="mt-2" superheroid={superhero.id} size="sm">Detalles</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                :
                data.filter(superhero => (superhero.name.toUpperCase()).includes(SuperHeroFilter.toUpperCase())).map((superhero, index) => {
                    return(
                        <Col key={`${superhero.name}-${index}`}>
                            <Card className='rounded-0'>
                                <Card.Img variant="top" src={superhero.images.lg} className='rounded-0'/>
                                <Card.Body>
                                    <Card.Title>{superhero.name}</Card.Title>
                                    
                                        <Row className="align-items-center">
                                            <Col style={{fontSize: 'smaller'}}>Intelligence</Col>
                                            <Col><ProgressBar striped variant="black" now={superhero.powerstats.intelligence} /></Col>
                                        </Row>
                                        
                                        <Row className="align-items-center">
                                            <Col style={{fontSize: 'smaller'}}>Strength</Col>
                                            <Col><ProgressBar striped variant="black" now={superhero.powerstats.strength} className="mb-1"/></Col>
                                        </Row>
    
                                        <Row className="align-items-center">
                                            <Col style={{fontSize: 'smaller'}}>Speed</Col>
                                            <Col><ProgressBar striped variant="black" now={superhero.powerstats.speed} className="mb-1"/></Col>
                                        </Row>
    
                                        <Row className="align-items-center">
                                            <Col style={{fontSize: 'smaller'}}>Durability</Col>
                                            <Col><ProgressBar striped variant="black" now={superhero.powerstats.durability} className="mb-1"/></Col>
                                        </Row>
    
                                        <Row className="align-items-center">
                                            <Col style={{fontSize: 'smaller'}}>Power</Col>
                                            <Col><ProgressBar striped variant="black" now={superhero.powerstats.power} className="mb-1"/></Col>
                                        </Row>
    
                                        <Row className="align-items-center">
                                            <Col style={{fontSize: 'smaller'}}>Combat</Col>
                                            <Col><ProgressBar striped variant="black" now={superhero.powerstats.combat} className="mb-1"/></Col>
                                        </Row>
    
                                    
                                    <Button variant="black" onClick={onClickButton} className="mt-2" superheroid={superhero.id} size="sm">Detalles</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
        }
        </Row>
  )
}

export default MiApi