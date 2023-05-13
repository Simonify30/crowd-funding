
import classes from './Countdown.module.css'

const CountDown = () => {


    return(
        <section className= {classes.container}>
            
           <div className={classes.countdown}>
                <div className={classes.flex}>
                    <div>
                        <h2>$89,914</h2>
                        <p>of $100,000 backed</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h2>5,007</h2>
                        <p>total backers</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h2>56</h2>
                        <p>days left</p>
                    </div>
                </div>
                <div>
                    <div className={classes.progress}>
                        <div className={classes.progressBar}>

                        </div>
                    </div>

                </div>
           </div>


        </section>
    )
};

export default CountDown;