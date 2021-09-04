import {QUESTION} from '../shared/questions';

import React from 'react';
import CheckBoxQ from './CheckBoxComponent'
import FreetextQ from './FreeTextComponent'
import SingleQ from './SingleQuestionComponent'

class Question extends React.Component{

  constructor(props){
    super(props);

    // this.singleChoiceQ(this)=this.singleChoiceQ.bind(this);
    // this.multiChoiceQ(this)=this.multiChoiceQ.bind(this);
    // this.endQ(this)=this.endQ.bind(this);


    this.state={
     currentQ : this.props.Ques[1],
     ansIndex:[],
     ansDict:{},
     checkedboxans:{},
     freetext:'',
     touched:{
       freetext: false,
       lastSeen: false,
     }

    }
    this.handleCheckedboxChange = this.handleCheckedboxChange.bind(this);
    this.handleCheckedboxSubmit = this.handleCheckedboxSubmit.bind(this);
    this.handleFreetextChange = this.handleFreetextChange.bind(this);
    this.handleFreetextSubmit = this.handleFreetextSubmit.bind(this);
  }




  selectPrevious(curId){
      const preQId=this.state.ansIndex[this.state.ansIndex.length-1];
     // const previousQId=this.state.ansIndex[this.state.currentQ.id-1];
      this.setState({currentQ:QUESTION[preQId] });
      const newansIndex = this.state.ansIndex.filter(Index => Index!==curId-1);
      this.setState({ansIndex:newansIndex});


      this.setState({
        checkedboxans:this.state.ansDict[this.state.ansIndex[this.state.ansIndex.length-1]]
      })


  }



jumpNext(ans, question){

    console.log(currentQ)
     console.log(question)
     console.log(ans)


    setTimeout(()=>{
      this.setState({
        currentQ:QUESTION[question.answer[ans]]
      })
    this.setState({
      ansIndex:[...this.ansIndex,question.id]
    })
    this.setState({
     ansDict:{...this.ansDict,[question.id]:ans}})

   },300);
    }





handleCheckedboxSubmit(event){
  this.setState({currentQ:QUESTION[(this.props.id+1)]})
  this.setState(
    {ansIndex:[...this.state.ansIndex,this.props.id]}
  )
  this.setState({
   ansDict:{...this.state.ansDict,[this.props.id]:this.state.checkedboxans}}
    )
  this.setState({checkedboxans:{}})
  event.preventDefault();
  }



  //console.log('allergy antibiotic'+JSON.stringify(this.state.ansDict));


handleCheckedboxChange(event){

  const target = event.target;
  const newvalue = target.type === 'checkbox' ? target.checked : target.value;
  const newname =target.name;

  //checkedboxans:{...prevState.checkedboxans},newname:"update"}
  this.setState(prevState =>({
    checkedboxans:{...this.state.checkedboxans,[newname]:newvalue}
  }
   //checkedboxans:{...prevState.checkedboxans,[newname]:newvalue}}
  ))}



handleFreetextChange(event){
  this.setState({freetext:event.target.value});
  console.log(this.state.freetext)
}

handleFreetextSubmit(event){
  if(this.state.freetext.length===0){
    alert('Please type in the answer according to the question')
    event.preventDefault();
  }
  else{
    this.setState({currentQ:QUESTION[(this.state.currentQ.id+1)]})

    this.setState(
      {ansIndex:[...this.state.ansIndex,this.state.currentQ.id]}
    )
    this.setState({
     ansDict:{...this.state.ansDict,[this.state.currentQ.id]:this.state.freetext}}
    )

    this.setState({freetext:null})
    event.preventDefault();
    console.log(this.state.freetext)
    }
  }



//make sure will change into true when touched
handleBlur = (field) => (event) => {
  this.setState({
      touched:{...this.state.touched,[field]:true}
  });
}

validate(freetext){
  const errors = {freetext:''};

  if(this.state.touched.freetext&&freetext.length===0)
    errors.freetext='Please type in the answer according to the question';

  return errors;
}

 //htmlfor 规定 label 与哪个表单元素绑定


endQ(question){
  return(
    <div>
      <p>{question.name}</p>
    </div>
  )

}

renderButton(){
  if(this.state.ansIndex.length===0){
    return(
      <div>
      </div>
    )
  }
  else{
    return(
      <div>
          <button
          type="button" onClick={()=>this.selectPrevious(this.state.currentQ.id)}
          >
          Previous
          </button>
      </div>
    )
  }
}


render(){

  //console.log(this.state.ansIndex)

    const Qtype = this.state.currentQ.type;
      if (Qtype===0){
        return (
          <div>

            <SingleQ   curquz={this.state.currentQ}
                       ansIndex={this.state.ansIndex}
                       ansDict={this.state.ansDict}
                       checkedboxans={this.state.checkedboxans}
                       onClick={this.jumpNext}/>



            {this.renderButton()}
          </div>
        );
      }
      else if(Qtype===1){
        return (
          <div>
            <CheckBoxQ curquz={this.state.currentQ}
                       ansIndex={this.state.ansIndex}
                       ansDict={this.state.ansDict}
                       checkedboxans={this.state.checkedboxans}/>
            {this.renderButton()}
          </div>
        );
      }
      else if(Qtype===2){
        return (
          <div>
          {this.typeFreetext(this.state.currentQ)}
          <FreetextQ curquz={this.state.currentQ}
                     ansIndex={this.state.ansIndex}
                     ansDict={this.state.ansDict}
                     checkedboxans={this.state.checkedboxans}/>

          {this.renderButton()}
          </div>
        );
      }
      else{
        return (
          <div>
          <>{this.endQ(this.state.currentQ)}</>
          {this.renderButton()}
          </div>
        );
      }

  }
}


export default Question;
