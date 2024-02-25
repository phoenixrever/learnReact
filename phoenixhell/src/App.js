import React, { Component } from 'react';
import Demo from './components/01_setState';
import Parent from './components/06_error_bundary/parent';

class App extends Component {
  render() {
    return (
      <>
        <Demo />
        {/* <Parent /> */}
      </>
    );
  }
}

export default App;
