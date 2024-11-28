import React from 'react'
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.png'
import login from '../../assets/images/login.png'
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap'

const NavbarLogin = () => {
  return (
    <>
      <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' alt='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">
                    {/* <NavDropdown id="basic-nav-dropdown">

                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">تسجيل خروج</NavDropdown.Item>

                    </NavDropdown> */}
                      <Nav.Link href='/login'
                          className="nav-text d-flex mt-3 justify-content-center">
                          <img src={login} className="login-img" alt="sfvs" />
                          <p style={{ color: "white" }}>دخول</p>
                      </Nav.Link>
                        <Nav.Link href='/cart'
                            className="nav-text position-relative d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>العربه</p>
                            <span className="position-absolute top-10 badge rounded-pill bg-danger" style={{left:"57px", top: "2px"}}>
                               0
                            </span>

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavbarLogin
