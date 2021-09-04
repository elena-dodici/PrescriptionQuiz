import React from 'react';
import{Button,Form,FormGroup,Label,Input,Col,FormFeedback} from 'reactstrap';

function FreetextQ(question){

      let lasAns = "";
      if(this.props.ansDict.length!==0 && this.state.ansIndex.includes(question.id)){
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



export default FreetextQ;
