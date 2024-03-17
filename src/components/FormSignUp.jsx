import React from "react";
import FormLandingPage from "./FormLandingPage";
import ButtonLandingPage from "./ButtonLandingPage";

const listForm = [
    {
        label:"Nama Depan",
        placeholder:"Masukkan Nama Depan"
    },{
        label:"Nama Belakang",
        placeholder:"Masukkan Nama Belakang"
    },{
        label:"Tanggal Lahir",
        placeholder:"Masukan Tanggal Lahir"
    },{
        label:"Nomor Telepon",
        placeholder:"Masukan Nomor Telepon"
    },{
        label:"Email",
        placeholder:"Masukan Email"
    },{
        label:"Kata Sandi",
        placeholder:"Masukkan Kata Sandi"
    },{
        label:"Ulang Kata Sandi",
        placeholder:"Masukkan Kata Sandi"
    }
]

function FormSignUp({triggerEvent}){
    const handleClick = () => {
        triggerEvent(1);
      };
    return(
        <div style={Styles.container}>
            {listForm.map(form=>{
                return <FormLandingPage label={form.label} placeholder={form.placeholder} />
            })}
            <ButtonLandingPage mode="dark" name="Daftar"/>
            <ButtonLandingPage mode="light" name="Daftar dengan Google"/>
            <p style={Styles.bottom}>Sudah punya aku ? <a href='#' onClick={handleClick}>Masuk</a></p>
        </div>
    )
}

const Styles ={
    container:{
        padding: '1.25em 2em',
        border:'0.1em solid #80DCF9',
        borderRadius: '0 0 1em 1em'
    },
    bottom:{
        fontSize:'1.25em',
        margin: '0.5em 0',
        textAlign:'center',
    },
}

export default FormSignUp;