import logo from './logo.svg';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Menu from './models/menu';
import Routes from './routes';
import Right from './models/right';
import Footer from './models/footer';

function App() {
  return (
    <div class="container-fluid h-100">
      <div class="row h-100">
      <div class="col fluid d-flex flex-column p-0">
      <Menu/>
      <div style={{marginTop: '50px'}}>
      <Routes/>
      <Footer/>
      </div>
      </div>
      <Right/>
      </div>
  </div>
  );
}

export default App;
