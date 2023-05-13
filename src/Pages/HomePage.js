import { Fragment, useState } from "react";
import Item from "../components/Item/Item";
import CountDown from "../components/Item/Countdown";
import ProjectList from "../components/Item/ProjectList";
import BackedItems from "../components/Item/BackedItem";
import ThankYou from "../components/Item/ThankYou";
import Mod from "../components/Item/Mod";

const HomePage = (props) => {
  const [itemisShown, setItemIsShown] = useState(false);
  const [summaryItemisShown, setSumarryItemIsShown] = useState(false);


  const showSummaryHandler = () => {
    setSumarryItemIsShown(true);
    setItemIsShown(false);
  };

  const hideSumarryHandler = () => {
    setSumarryItemIsShown(false);
    setItemIsShown(false);
  };

  const showItemHandler = () => {
    setItemIsShown(true);
  };

  const hideItemHandler = () => {
    setItemIsShown(false);
  };

  return (
    <Fragment>
      {itemisShown && (
        <BackedItems onClose={hideItemHandler} onSummary={showSummaryHandler} onCancel={hideSumarryHandler} />
      )}
      {summaryItemisShown && (
        <Mod onClose={hideSumarryHandler}>
          <ThankYou onCancel={hideSumarryHandler} />
        </Mod>
      )}

      <main>
        <Item onShowItem={showItemHandler} />
        <CountDown />
        <ProjectList />
      </main>
    </Fragment>
  );
};

export default HomePage;
