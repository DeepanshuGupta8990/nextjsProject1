'use client'

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container, Navbar } from "react-bootstrap"; 
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  // const router = useRouter();
  const pathname = usePathname();
  // const userSearchParams = useSearchParams();
  return (
    <div>
      <Navbar bg="primary" variant="dark" sticky="top" expand='sm' collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} href="/">NEXTjs 13.4 image gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/static" active={pathname==='/static'}>Static</Nav.Link>
            <Nav.Link as={Link} href="/dynamic" active={pathname==='/dynamic'}>Dynamic</Nav.Link>
            <Nav.Link as={Link} href="/isr" active={pathname==='/isr'}>ISR</Nav.Link>
            <Nav.Link as={Link} href="/about" active={pathname==='/about'}>About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
