import React from "react";

function FormLandingPage(props){
    return(
        <div>
            <form >
                <label style={Styles.label}>{props.label}</label><br/>
                <input style={Styles.input} placeholder={props.placeholder} /><br/>
            </form> 
        </div>
    );
}

const Styles={
    label:{
        fontSize:'1.5em',
        marginLeft:'0.75em',
    },
    input:{
        padding: '0.35em',
        marginTop: '0.5em',
        marginBottom: '1.5em',
        fontSize:'1.25em',
        width: '97%'
    }
}

export default FormLandingPage;