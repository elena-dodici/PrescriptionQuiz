//import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import React,{Component} from 'react';

class App extends React.Component{

  render(){
    return (
      <div className='App'>
          <Main />
      </div>
    );
  }
}

export default App;
