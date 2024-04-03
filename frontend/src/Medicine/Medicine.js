import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle, Button, CardSubtitle } from "react-bootstrap";

function Medicine() {
    return (
        <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card style={{ width: '30rem', display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: '1rem', boxShadow: '2px 2px 10px Grey' }} className="mt-3 mb-3" >
                <CardImg variant="top" style={{ width: '3rem', height: '3rem' }} src="https://cdn01.pharmeasy.in/dam/products/W38967/teplota-100mg-bottle-of-15ml-syrup-1-1661333432.jpg?dim=320x320&dpr=1&q=100" />
                <CardBody>
                    <CardTitle style={{ fontSize: '22px' }} className="mb-2">Teplota 100mg Bottle Of 15ml Syrup </CardTitle>
                    <CardSubtitle style={{ fontWeight: '400' }} className="mb-3 mt-3" >By AVIGHNA MEDICARE PVT LTD</CardSubtitle>
                    <CardSubtitle style={{ fontSize: '18px' }} className="mb-3 mt-3">15ml Syrup in Bottle</CardSubtitle>
                    <CardBody style={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
                        <CardText style={{ fontSize: '21px' }}>
                            Rs 80
                        </CardText>
                        <Button style={{ backgroundColor: '#008B8B' }}>Add to Cart</Button>
                    </CardBody>
                </CardBody>
            </Card>
            <Card style={{ width: '30rem', display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: '1rem', boxShadow: '2px 2px 10px Grey' }} className="mt-3 mb-3" >
                <CardImg variant="top" style={{ width: '3rem', height: '3rem' }} src="https://cdn01.pharmeasy.in/dam/products/W38967/teplota-100mg-bottle-of-15ml-syrup-1-1661333432.jpg?dim=320x320&dpr=1&q=100" />
                <CardBody>
                    <CardTitle style={{ fontSize: '22px' }} className="mb-2">Teplota 100mg Bottle Of 15ml Syrup </CardTitle>
                    <CardSubtitle style={{ fontWeight: '400' }} className="mb-3 mt-3" >By AVIGHNA MEDICARE PVT LTD</CardSubtitle>
                    <CardSubtitle style={{ fontSize: '18px' }} className="mb-3 mt-3">15ml Syrup in Bottle</CardSubtitle>
                    <CardBody style={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
                        <CardText style={{ fontSize: '21px' }}>
                            Rs 80
                        </CardText>
                        <Button style={{ backgroundColor: '#008B8B' }}>Add to Cart</Button>
                    </CardBody>
                </CardBody>
            </Card>
            <Card style={{ width: '30rem', display: 'flex', justifyContent: 'center', flexDirection: 'row', padding: '1rem', boxShadow: '2px 2px 10px Grey' }} className="mt-3 mb-3" >
                <CardImg variant="top" style={{ width: '3rem', height: '3rem' }} src="https://cdn01.pharmeasy.in/dam/products/W38967/teplota-100mg-bottle-of-15ml-syrup-1-1661333432.jpg?dim=320x320&dpr=1&q=100" />
                <CardBody>
                    <CardTitle style={{ fontSize: '22px' }} className="mb-2">Teplota 100mg Bottle Of 15ml Syrup </CardTitle>
                    <CardSubtitle style={{ fontWeight: '400' }} className="mb-3 mt-3" >By AVIGHNA MEDICARE PVT LTD</CardSubtitle>
                    <CardSubtitle style={{ fontSize: '18px' }} className="mb-3 mt-3">15ml Syrup in Bottle</CardSubtitle>
                    <CardBody style={{ display: 'flex', justifyContent: 'space-between', padding: '0' }}>
                        <CardText style={{ fontSize: '21px' }}>
                            Rs 80
                        </CardText>
                        <Button style={{ backgroundColor: '#008B8B' }}>Add to Cart</Button>
                    </CardBody>
                </CardBody>
            </Card>
        </Card>
    )
}

export default Medicine;