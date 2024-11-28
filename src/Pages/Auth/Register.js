import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Container style={{ minHeight: "680px"}}>
      <Row className='py-5 d-flex justify-content-center height-search'>
        <Col sm="12" className='d-flex flex-column'>
            <label className='mx-auto title-login'>تسجيل حساب جديد</label>
            <input placeholder='اسم المستخدم ...' type='text' className='user-input mt-3 text-center mx-auto' />
            <input placeholder='الايميل ' type='text' className='user-input my-3 text-center mx-auto' />
            <input placeholder='كلمة السر  ...' type='password' className='user-input text-center mx-auto' />
            <button className='btn-login mx-auto mt-4'>تسجيل حساب</button>
            <label className='mx-auto my-4'>
                لديك حساب بالفعل؟ {" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <span style={{ cursor: "pointer" }} className='text-danger'>اضغط هنا</span>
                </Link>
            </label>

        </Col>
      </Row>
    </Container>
  )
}

export default Register
