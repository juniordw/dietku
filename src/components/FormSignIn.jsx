import React from "react";
import FormLandingPage from "./FormLandingPage";
import ButtonLandingPage from "./ButtonLandingPage";


const listForm = [
    {
        label:"Email",
        placeholder:"Masukkan Email"
    },{
        label:"Kata Sandi",
        placeholder:"Masukkan Kata Sandi"
    }
]

function FormSignIn({triggerEvent}){
    const handleClick = () => {
        triggerEvent(2);
      };
    return(
        <div style={Styles.container}>
            {listForm.map(form=>{
                return <FormLandingPage label={form.label} placeholder={form.placeholder} />
            })}
            <input type="checkbox" style={{...Styles.checkbox,...Styles.default}}/>
            <label style={{...Styles.default,marginLeft:'0.5em'}}>Ingat Saya</label>
            <a href="#" style={{float:'right',...Styles.default}}>Lupa Kata Sandi?</a>
            <ButtonLandingPage mode="dark" name="Masuk"/>
            <div style={{position:'relative'}}>
                <hr />
                <p style={{...Styles.default,...Styles.or}}>atau</p>
            </div>
            <ButtonLandingPage mode="light" name="Masuk dengan Google"/>
            <p style={{...Styles.default,textAlign:'center'}}>Belum punya aku ? <a href='#' onClick={handleClick}>Daftar</a></p>
        </div>
    )
}

const Styles ={
    container:{
        padding: '1.25em 2em',
        border:'0.1em solid #80DCF9',
        borderRadius: '0 0 1em 1em',
    },
    checkbox:{
        width:'1em',
        height:'1em'
    },
    default:{
        fontSize:'1.25em',
        margin: '0.5em 0'
    },
    or:{
        marginLeft:'45%',
        width:'10%',
        textAlign:'center',
        backgroundColor:'white',
        zIndex:'10',
        position:'absolute',
        top:'-1.15em',
        display:'inline-block',
    }
}

export default FormSignIn;