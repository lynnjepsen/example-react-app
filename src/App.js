import React, {Component} from 'react';
import Button from '@material/react-button/dist'; // /index.js is implied

import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Button
          raised
          className='button-alternate'
          onClick={() => console.log('clicked!')}
        >
          Click Me!
        </Button>
      </div>
    );
  }
}

export default App;