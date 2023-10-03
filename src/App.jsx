import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Company from "./components/pages/Company"
import NovoProject from './components/pages/NovoProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from "./components/layout/Container"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"


function App() {


  return (
    <Router>
      <NavBar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/company" element={< Company />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="/novoProject" element={< NovoProject />} />
          <Route path="/projects/:id" element={< Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
