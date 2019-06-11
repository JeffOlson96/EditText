import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import image from './images/Letterkenny1.jpg'
import './App.css';

class App extends React.Component {
  render ()
  {
    return (
      <div className="App">
        <TopNavigationBar />
        <p className="App-header">Dirty Fucking Dangles Bois
          {/*<img className="hockeyplayers" src='./images/Letterkenny1.jpg' width="200" height="200"></img>*/}
        </p>
      </div>
    )
    
  }
}

export default App;
