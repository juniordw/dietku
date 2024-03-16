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

function FormSignIn(){
    return(
        <div>
            {listForm.map(form=>{
                return <FormLandingPage label={form.label} placeholder={form.placeholder} />
            })}
            <input type="checkbox" />
            <label>   Ingat Saya</label>
            <a>Lupa Kata Sandi?</a>
            <ButtonLandingPage mode="dark"/>
            <hr />
            <p>atau</p>
            <hr />
            <ButtonLandingPage mode="light"/>
            <p>Belum punya aku ? <a href="#">Daftar</a></p>
        </div>
    )
}

export default FormSignIn;