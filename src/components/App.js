import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/App.css';
import Footer from './Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Footer/>
      </div>

    );
      
  }
}

const Base = () => (
  <div>
    <div> what the heck</div>
  </div>
)

const rootDiv = document.getElementById('root');

ReactDOM.render(<Base/>, rootDiv);

export default App;
 