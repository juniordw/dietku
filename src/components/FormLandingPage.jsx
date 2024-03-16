import React from "react";

function FormLandingPage(props){
    return(
        <div >
            <form >
                <label style={Styles.label}>{props.label}</label><br/>
                <input style={Styles.input} placeholder={props.placeholder} /><br/>
            </form> 
        </div>
    );
}

const Styles={
    label:{
        fontSize:'24px',
        padding:'15px',
    },
    input:{
        padding: '10px',
        margin: '15px 0 30px',
        fontSize:'18px',
        width: '100%'
    }
}

export default FormLandingPage;