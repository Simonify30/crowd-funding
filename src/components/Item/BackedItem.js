import { useState } from "react";

import classes from "./BackedItem.module.css";
import Modal from "./Modal";
import closeIcon from "../../images/icon-close-modal.svg";
import ListItem from "./ListItem";

const Dummy_Item = [
  {
    id: "d1",
    name: "Pledge with no reward",
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    days: "",
  },

  {
    id: "d2",
    name: "Bamboo Stand",
    price: "25",
    description:
      "You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    days: "101",

  },

  {
    id: "d3",
    name: "Black Edition Stand",
    price: "75",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    days: 64,

  },

  {
    id: "d4",
    name: "Mahogany Special Edition",
    price: "200",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    days: 0,

  },
];






const BackedItems = props => {

  const [toggleFormId, setToggleFormId] = useState('');
  

  const toggleFormHandler = (id) => {
    setToggleFormId(id);
  };


  const ShowItems = Dummy_Item.map(ShowItem => (
    <ListItem
      key={ShowItem.id}
      id={ShowItem.id}
      name={ShowItem.name}
      price={ShowItem.price}
      description={ShowItem.description}
      days={ShowItem.days}
      toggleFormHandler={toggleFormHandler}
      toggleFormId={toggleFormId}
      onCall={props.onSummary}
      onCancel={props.onCancel}
    />
  ));

  return (
    <>

    <Modal onClose={props.onClose} className={classes.container}>
      <div className={classes.details}>
        <div className={classes.img}>
          <h2>Back this project</h2>
          <img
          src={closeIcon}
          alt="closeIcon"
          onClick={props.onClose}
        />
        </div>
        
        
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>

      {ShowItems}
    </Modal>
    </>
  );
};

export default BackedItems;
