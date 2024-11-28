import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import phone from "../../assets/images/phone.png"
import face from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import instagram from "../../assets/images/instagram.png"

const Footer = () => {
  return (
    <div className='footer-background footer mt-3 pt-2' style={{maxHeight: "50px"}}>
      <Container className='py-3'>
        <Row className='d-flex justify-content-between align-items-center'>
            <Col sm="6" className='d-flex align-items-center'>
                <div className='footer-shroot'>الشروط والاحكام</div>
                <div className='footer-shroot mx-2'>سياسة الخصوصية</div>
                <div className='footer-shroot mx-2'>اتصل بنا</div>
            </Col>
            <Col sm="6" className='d-flex justify-content-center align-items-center'>
                {/* <div className='d-flex pt-3 mx-2'>
                    <img width="20px" height="20px" src={phone} alt='phone' />
                    <p className='footer-phone'>01205462221</p>
                </div> */}
                <div style={{ cursor: "pointer"}}>
                    <img width="20px" height="20px" src={face} alt='facebook' />
                </div>
                <div style={{ cursor: "pointer"}}>
                    <img width="20px" height="20px" src={twitter} alt='twitter' />
                </div>
                <div style={{ cursor: "pointer"}}>
                    <img width="20px" height="20px" src={instagram} alt='instagram' />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
