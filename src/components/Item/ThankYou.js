
import classes from './ThankYou.module.css'
import ThanksLogo from '../../images/icon-check.svg'

const ThankYou = props => {
  return (
    <section className= {`${classes.thankYou} ${classes.container}` } >
      <img src={ThanksLogo} alt='check'/>
      <h2>Thanks for your support!</h2>
      <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
      </p>
      <button onClick={props.onCancel}>Got it</button>
    </section> 
  );
};

export default ThankYou;
