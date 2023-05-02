import classes from './Item.module.css';
import Bookmark from '../../images/icon-bookmark.svg';

const Item = (props) => {

    return(
        <section className={classes.item}>
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

            <div className={classes.flex}>
                <button onClick={props.onShowItem}>Back this project</button>
                <div className={classes.bookmark}>
                    <img src={Bookmark} alt='bookmark icon'/><p>Bookmark</p>
                </div>
                
            </div>
        </section>
    )
};

export default Item;