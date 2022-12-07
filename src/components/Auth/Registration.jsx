import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {createAuthFB} from "../../firebase/fireauth";

const Registration = () => {
    const {register, handleSubmit} = useForm();

    const [regData, setRegData] = useState(null)


    const onSubmit = data => {
        const {login, password} = data
        console.log("log:", login)
        console.log("pass:", password)
        createAuthFB({login, password})
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("login", {required: true})} placeholder='login'/>
                <input {...register("password", {required: true})} placeholder='password'/>
                <button type="submit">Отправить</button>
            </form>
        </>
    )
}
export default Registration