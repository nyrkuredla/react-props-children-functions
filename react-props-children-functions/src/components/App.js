import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout';
import ParentComponent from './ParentComponent';



class App extends Component {
  render() {
    this.state={
      children: <ParentComponent />
    }
    return (
      <div className="App">
        <div className="main container row">
          <BaseLayout children={this.state.children}>

          </BaseLayout>

        </div>
      </div>
    );
  }
}

export default App;
