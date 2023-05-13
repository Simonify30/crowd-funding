import { useState } from "react";
import classes from "./ListItem.module.css";
import Form from "./PledgeForm";

const ListItem = props => {
  const { days: progress, toggleFormId, toggleFormHandler } = props;
  const hideForm = progress === "" || progress === 0;
  const [isHovering, setIsHovering] = useState(false);

  const FormChangeHandler = id => {
    !hideForm && toggleFormHandler(id);
    hideForm && toggleFormHandler(false);
  };

  const setColorHandler = () => {
    if (progress === 0) {
      return "lightgrey";
    }
  };

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <li>
      <label htmlFor={props.id} style={{ color: setColorHandler() }}>
        <div>
          <input
            type="radio"
            name="backed"
            id={props.id}
            value={props.name}
            disabled={progress === 0}
            onChange={() => FormChangeHandler(props.id)}
          />
        </div>

        <div>
          <div className={classes.flex}>
            <h2
              className={`${progress === 0 ? "" : isHovering && classes.howr}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {props.name}
              {progress === "" ? (
                ""
              ) : (
                <span>Pledge ${props.price} or more</span>
              )}
            </h2>
            <h3>
              {progress} {progress === "" ? "" : <sup>left</sup>}
            </h3>
          </div>
          <p>{props.description}</p>
          {props.id === toggleFormId ? (
            <Form onMove={props.onCall} onCancel={props.onCancel} />
          ) : (
            ""
          )}
        </div>
      </label>
    </li>
  );
};

export default ListItem;
