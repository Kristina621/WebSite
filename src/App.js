import Menu from './models/menu';
import Routes from './routes';
import Right from './models/right';
import Footer from './models/footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="container-fluid h-100">
        <div className="row h-100">

          <div className="col fluid d-flex flex-column">
            <Menu />
            <div style={{ marginTop: '50px' }}>
              <div className="flex-grow">
                <div className="col-12 py-4 ">
                  <Routes />
                </div>
              </div>
            </div>
          </div>
          <Right />
        </div>
        <div className="row">
          <Footer />


        </div>
      </div>
    </Router>
  );
}

export default App;
