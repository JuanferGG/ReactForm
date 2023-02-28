import React from 'react';
import './styleForm.css';
import logo from './img/user.jpg';



const Form = () => {
    return (
        <form>
            <label>
                <img src={logo}></img>
                <span>Name:</span>
                <input type="text" name="name" />
                <span>Password:</span>
                <input type="password" name="name" />
                
                <input type="submit" value="Submit" className='submit' />
            </label>
        </form>
    );
}

export default Form;
