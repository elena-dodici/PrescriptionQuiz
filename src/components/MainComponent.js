import {QUESTION} from '../shared/questions';
import React,{Component} from 'react';
import Question from './RenderQuestion';
import { Navbar ,NavbarBrand} from 'reactstrap';




class Main extends React.Component{

  constructor(props){
    super(props);
    this.state={
      allQuestion : QUESTION,

    }

  }







render(){
  return(
    <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Questionnaire</NavbarBrand>
            </div>
          </Navbar>

    <Question Ques={this.state.allQuestion}/>
    </div>
  )
 }
}


export default Main;
