import classes from './Mod.module.css'


const Mod = ({children, onClose})=>{
    return<>
    <div className={classes.backdrop} onClick={onClose}/>
    <dialog open className={classes.mod}>{children}</dialog>

    </>
}


export default Mod;