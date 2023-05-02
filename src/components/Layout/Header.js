import classes from './Header.module.css';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';



const Header = (props) => {


    return (
        <Fragment>
            <main className={classes['main-image']}>
            <div className={classes['flex-link']}>
                <NavLink to='about' style={({isActive})=>{return {color: isActive?'blue':''}}}>About</NavLink>
                <NavLink to='discover' style={({isActive})=>{return {color: isActive?'blue':''}}}>Discover</NavLink>
                <NavLink to='/' style={({isActive})=>{return {color: isActive?'blue':''}}}>Get Started</NavLink>
            </div>

            
            </main>

            <div className={classes.item}>
                <Outlet />
            </div>
        </Fragment>
        
    );

};

export default Header;