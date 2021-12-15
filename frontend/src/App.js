import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Tecnicaspage from './pages/Tecnicaspage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detailtecnicascreen from './pages/Detailtecnicascreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Tecnicaspage />} /> 
            <Route path='/tecnica/:id' element={<Detailtecnicascreen />} /> 
          </Routes>
        </Container>
      </main>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
