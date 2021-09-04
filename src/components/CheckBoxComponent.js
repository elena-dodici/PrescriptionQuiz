import React from 'react';
import{Button,Form,FormGroup,Label,Input,Col} from 'reactstrap';


  function  CheckBoxQ(question){
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




export default CheckBoxQ;
