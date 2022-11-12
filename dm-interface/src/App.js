import './App.css'
import TitleBar from './components/TitleBar'
import InitiativeTracker from './components/initiative-components/InitiativeTracker'
import HpTracker from './components/hp-components/HpTracker'
import { Col, Container, Row } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Container>
        <Row>
          <Col sm={4}>
            <InitiativeTracker />
            <HpTracker />
          </Col>
          <Col sm={8}></Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default App;
