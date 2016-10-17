import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
