import { useState } from "react";

import classes from "./ProjectList.module.css";

const ProjectList = () => {
  const [progress, setProgress] = useState(0);
  const [changeColor, setChangeColor] = useState(false);

  const setColorHandler = () => {
    if (progress === 0) {
      return "grey";
    }

    setProgress(0);
  };

  const ChangeColorHandler = () => {
        setChangeColor(!changeColor)
    };

  return (
    <section className={classes.container}>
      <div className={classes.projectList}>
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height. Placing
          your monitor at eye level has the potential to improve your posture and
          make you more comfortable while at work, helping you stay focused on the
          task at hand.
        </p>

        <p>
          Featuring artisan craftsmanship, the simplicity of design creates extra
          desk space below your computer to allow notepads, pens, and USB sticks
          to be stored under the stand.
        </p>

        <div className={classes.projectItem}>
          <div className={classes.flex}>
            <h3>Bamboo Stand</h3>
            <p className={classes.price}>Pledge $25 or more</p>
          </div>

          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>

          <div className={classes.flexBtn}>
            <h4>
              101 <sup>left</sup>
            </h4>
            <button onClick={ChangeColorHandler} className={`${(changeColor === true) ? 'bg-green-700' : 'bg-blue-700'}`}>Select Reward</button>
          </div>
        </div>

        <div className={classes.projectItem}>
          <div className={classes.flex}>
            <h3>Black Edition Stand</h3>
            <p className={classes.price}>Pledge $75 or more</p>
          </div>

          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is included.
          </p>

          <div className={classes.flexBtn}>
            <h4>
              64 <sup>left</sup>
            </h4>
            <button onClick={ChangeColorHandler} style={{background: changeColor}}>Select Reward</button>
          </div>
        </div>

        <div className={classes.projectItem} style={{ color: setColorHandler() }}>
          <div className={classes.flex}>
            <h3>Mahogany Special Edition</h3>
            <p className={classes.price}>Pledge $200 or more</p>
          </div>

          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>

          <div className={classes.flexBtn}>
            <h4>
              {progress} <sup>left</sup>
            </h4>
            <button style={{ backgroundColor: setColorHandler() }}>
              Out of stock
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProjectList;
