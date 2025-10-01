import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import  Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import  Container  from 'react-bootstrap/Container';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    
       <BrowserRouter>  
         <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container> 
        </Navbar> 
        <Routes>
          <Route path="/" element={<Content></Content>} />
          <Route path="/read" element={<Header></Header>} />
          <Route path="/create" element={<Footer></Footer>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App