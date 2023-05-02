import { useState } from 'react';


import classes from './ListItem.module.css';
import Form from './PledgeForm';




const ListItem =(props)=>{

    const [progress, setProgress] = useState(props.days);
    const [visible, setVisible] = useState(true);

    const FormChangeHandler = () =>{
        {visible ? setVisible(false) : setVisible(true)}
        
        
        
    }
    

    const setColorHandler = () => {
        if (progress === 0) {
          return 'lightgrey';
        }


    }

    return(
        <li>
            <label htmlFor={props.id} style={{color: setColorHandler() }} >
                <div>
                    <input type="radio" name="backed" id={props.id} value={props.name} disabled={progress === 0} onChange={FormChangeHandler}/>
                </div>

                <div>
                    <div className={classes.flex}>
                        <h2>
                        {props.name} {(progress === '') ? '' : <span>Pledge ${props.price} or more</span>}
                        </h2>
                        <h3>
                        {progress} {(progress === '') ? '' : <sup>left</sup>}
                        </h3>
                    </div>
                    <p>{props.description}</p>
                    {(progress === '' || progress === 0 || visible) ? '' : <Form /> }
                    {/* {visible ? <FormItem onChange={props.onSummary} /> : null} */}
                </div>
            </label>
        </li>
        
    )
}

export default ListItem;