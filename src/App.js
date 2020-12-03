import Menu from './models/menu';
import Routes from './routes';
import Right from './models/right';
import Footer from './models/footer';

function App() {
  return (
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col fluid d-flex flex-column">
          <Menu/>
          <div style={{marginTop: '50px'}}>
            <div class="flex-grow">
              <div class="col-12 py-4">
                <Routes/>
            </div>
          </div>
          </div>
        </div>
        <Right/>
      
      </div>
      <div class="row">
      <Footer/>
      </div>
  </div>
  );
}

export default App;
