import React from 'react';
import classes from "./Api.module.css"



const Api = (props) => {



    function sendApi(event) {
        let iapi = document.getElementById('4617485456');
        props.setApi(iapi.value);
        iapi.value = '';
        event.preventDefault()
    }


    return (
        <div className={classes.api}>
            <div>
                Input your API key for (footbal-data.org)
            </div>
            <div className={classes.inputWrapper}>
                <form action={sendApi}>
                    <input type="text" id='4617485456' className={classes.input} name="Api" placeholder='past API key here'></input>
                    <input type="submit" id='4617485456123123' className={classes.submit} value="Send" onClick={sendApi}></input>
                </form>
            </div>
        </div>
    );
}

export default Api;