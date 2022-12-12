import React from "react";
import {useForm} from 'react-hook-form'

import styles from './Login.module.scss'

const Login = (setAccountExist) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    const test = () => {
        console.log("111")
        setAccountExist(false)
    }

    return (
        <div className={styles.loginWrp}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.loginHeader}>Войти</h3>
                <input className={styles.loginInput} {...register("email", {required: true})} placeholder='Login'/>
                <input className={styles.loginInput} {...register("password", {required: true})} placeholder='Password'/>
                <button className={styles.loginButton} type="submit">Создать аккаунт</button>
            </form>
            <button className={styles.loginButton}
                    onClick={test}
            >Уже есть аккаунт</button>
        </div>
    )
}

export default Login