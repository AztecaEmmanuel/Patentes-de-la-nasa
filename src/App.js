import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router ,Route } from 'react-router-dom';

// SERVICES
import { request } from './services/request';
import { getStorage, setStorage } from './services/storage';

// COMPONENTS
import Details from './components/Details';
import Baner from './components/Baner';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

const Lista = lazy( () => import('./components/Lista') );



class App extends Component {

  constructor() {
    super();
    this.state = {data:[]}
  }

  async componentDidMount() {
    
    
    const responseStorage = await getStorage();

    if(responseStorage == null)
    {
      let response = await request();
      await setStorage(response);
      await this.setState({data:response});
    }
    else
    {
      await this.setState({data:responseStorage});
    }

  }

  filtrado = (num) => {
    const firstFilter = this.state.data.filter( (item,index) => index <= num);
    return firstFilter;
  }

  render() {    

    return (

      <div className="container">
        <div className="row">
          <Router>

              <Route exact path="/">
                <Baner/>
                <h1 id="lista" className="col-sm-12 col-lg-12 col-md-12 h1 text-whites text-center">Lista de patentes</h1>
                <Suspense fallback={<h1>Esperando....</h1>}>
                  <Lista data={this.state.data}/>
                </Suspense>
                <About />
                <Contact />
                <Footer />

              </Route>
              
              <Route path="/details:id" children={<Details/>} />

          </Router>
        </div>
      </div>
    )
  }
}

export default App;
