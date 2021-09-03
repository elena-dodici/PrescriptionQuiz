import {QUESTION} from '../shared/questions';
import{Button,Form,FormGroup,Label,Input,Col,FormFeedback} from 'reactstrap';
import React from 'react';

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



jumpNext(ans,question){
    setTimeout(()=>{

    this.setState({currentQ:QUESTION[QUESTION[this.state.currentQ.id].answer[ans]]})
    this.setState({ansIndex:[...this.state.ansIndex,question.id]}
      //{ansIndex:ansIndex.add(question.id)}
    )
    this.setState({
     ansDict:{...this.state.ansDict,[question.id]:ans}}
    )

    },300);
    }


  singleChoiceQ(question){
     // for(const [key,value] of Object.entries(question.answer))
     //      console.log(`${key}`)
    // console.log(Object.keys(question.answer))

   let lastAns = "";
   if (this.state.ansDict.length!==0 && question.id in this.state.ansDict){

        lastAns = this.state.ansDict[question.id];
     }
   const answers = Object.keys(question.answer).map((ans)=> {
     if(lastAns === ans)
         return(
           <div key={question.id+ans}>
               <input type="radio"  onClick={()=>this.jumpNext(ans,question)} name={question.id} value ={ans} defaultChecked={true}/>{ans}
           </div>
         );
     else
        return(
          <div key={question.id+ans}>

              <input type="radio" onClick={()=>this.jumpNext(ans,question)} name={question.id} value ={ans}/>{ans}
          </div>
        );
    });


    return(
        <div className="container">
          <div className="row">
                <p>{question.name}</p>
                   {answers}
          </div>
        </div>
    )

}




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
typeFreetext(question){

  let lasAns = "";
  if(this.state.ansDict.length!==0 && this.state.ansIndex.includes(question.id)){
    lasAns = this.state.ansDict[question.id]
  }
  const errors = this.validate(this.state.freetext);
    if(lasAns === this.state.freetext){
      return(
        <Form onSubmit={this.handleFreetextSubmit}>
            <FormGroup row>
                <Label htmlFor='freetext' md={2}>{this.state.currentQ.name}</Label>
                <Col md={10}>
                    <Input type='textarea' id='freetext' name='message'
                        row="12"
                        value ={this.state.ansDict[this.state.currentQ.id]}
                        valid={errors.freetext===''}
                        invalid={errors.freetext!==''}
                        onBlur={this.handleBlur("freetext")}
                        onChange={this.handleFreetextChange}
                     ></Input>
                     <FormFeedback>{errors.freetext} </FormFeedback>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col md={{size:10, offset:2}}>
                   <Button type="submit" >
                     Next
                    </Button>
                </Col>
           </FormGroup>
        </Form>
      )
    }

    else{
      return(
        <Form onSubmit={this.handleFreetextSubmit}>
            <FormGroup row>
                <Label htmlFor='freetext' md={2}>{this.state.currentQ.name}</Label>
                <Col md={10}>
                    <Input type='textarea' id='freetext' name='message'
                        row="12"
                        value ={this.state.freetext}
                        valid={errors.freetext===''}
                        invalid={errors.freetext!==''}
                        onBlur={this.handleBlur("freetext")}
                        onChange={this.handleFreetextChange}
                     ></Input>
                     <FormFeedback>{errors.freetext} </FormFeedback>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col md={{size:10, offset:2}}>
                   <Button type="submit" >
                     Next
                    </Button>
                </Col>
           </FormGroup>
        </Form>
      );
    }

}



selectCheckBox(question){
  const checkBox =Object.keys(question.answer).map((ans)=>{
        if(Object.keys(this.state.checkedboxans).includes(ans) && this.state.checkedboxans[ans]===true)
            return(
              <div key={question.id+ans}>
                         <Input type='checkbox'
                          name ={ans}
                          onChange={this.handleCheckedboxChange}
                          checked
                          />{' '}
                         {ans}


              </div>
          )

        else{
          return (
            <div key={question.id+ans}>
                       <Input type='checkbox'
                        name ={ans}
                        onChange={this.handleCheckedboxChange}
                        />{' '}
                       {ans}


            </div>
          );
       }
    });

    return(
      <div className="row row-content">
        <div className="col-12">
          <Form onSubmit={this.handleCheckedboxSubmit}>
              <FormGroup check>
                  <Label check>
                      <p>{question.name}</p>
                     <strong>{checkBox}</strong>

                  </Label>
             </FormGroup>
             <FormGroup row>
                 <Col md={{size:10, offset:2}}>
                    <Button type="submit" >
                      Next
                     </Button>
                 </Col>
            </FormGroup>
       </Form>
     </div>
    </div>
    )
}

handleCheckedboxSubmit(event){
  this.setState({currentQ:QUESTION[(this.state.currentQ.id+1)]})
  this.setState(
    {ansIndex:[...this.state.ansIndex,this.state.currentQ.id]}
  )
  this.setState({
   ansDict:{...this.state.ansDict,[this.state.currentQ.id]:this.state.checkedboxans}}
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
  console.log(this.state.ansDict)
  //console.log(this.state.ansIndex)
  console.log(this.state.checkedboxans)
    const Qtype = this.state.currentQ.type;
      if (Qtype===0){
        return (
          <div>
            {this.singleChoiceQ(this.state.currentQ)}

            {this.renderButton()}
          </div>
        );
      }
      else if(Qtype===1){
        return (
          <div>
            {this.selectCheckBox(this.state.currentQ)}
            {this.renderButton()}
          </div>
        );
      }
      else if(Qtype===2){
        return (
          <div>
          {this.typeFreetext(this.state.currentQ)}
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
