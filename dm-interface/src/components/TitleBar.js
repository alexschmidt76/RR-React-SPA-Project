import { Container, Navbar } from 'react-bootstrap'
import dndLogo from '../dnd-logo.png'

export default function TitleBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
            <img
                alt="dnd 5e logo"
                src={dndLogo}
                width="30"
                height="30"
                style={{marginRight: '10px'}}
                className="d-inline-block align-top"
            />
            Dungeon Master Interface
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}