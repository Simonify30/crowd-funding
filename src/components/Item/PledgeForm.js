import { Form } from "react-router-dom";
import { useState } from "react";
import classes from "./Pledge.module.css";

const PledgedForm = props => {
  const [getValue, setGetValue] = useState('');

  

  const submittion = () => {

    if (getValue.trim() === '') {
        return;
    }
    
    console.log(getValue)
    props.onChange()

  };


  return (
    <Form method="post" onSubmit={(event) =>{
    event.preventDefault();
        
    }}>
      <div className={classes.flex}>
        <p>Enter your pledge</p>

        <div className={classes.price}>
          <input 
            type="text" 
            id="name"
            name="name"
            value={getValue}
            onChange={event => {
                setGetValue(event.target.value);
              }}
            />

          <button type="button" onClick={submittion}>Continue</button>
        </div>
      </div>
    </Form>
  );
};

export default PledgedForm;
