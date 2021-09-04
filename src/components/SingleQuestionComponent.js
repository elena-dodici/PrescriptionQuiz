import React from 'react';







  function SingleQ(props){
     // for(const [key,value] of Object.entries(question.answer))
     //      console.log(`${key}`)
    // console.log(Object.keys(question.answer))


   let lastAns = "";
   if (Object.keys(props.ansDict).length!==0 && props.curquz.id in props.ansDict){

        lastAns = props.ansDict[props.curquz.id];
     }
   const answers = Object.keys(props.curquz.answer).map((ans)=> {
     if(lastAns === ans)
         return(
           <div key={props.curquz.id+ans}>
               <input type="radio"  onClick={()=>props.onClick(ans,props.curquz)} name={props.curquz.id} value ={ans} defaultChecked={true}/>{ans}
           </div>
         );
     else
        return(
          <div key={props.curquz.id+ans}>
              <input type="radio" onClick={()=>props.onClick(ans,props.curquz)} name={props.curquz.id} value ={ans}/>{ans}
          </div>
        );
    });


  return(
      <div className="container">
        <div className="row">
              <p>{props.curquz.name}</p>
                 {answers}
        </div>
      </div>
  )



}


export default SingleQ;
