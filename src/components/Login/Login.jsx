import React from "react";
import {useForm} from 'react-hook-form'

import styles from './Login.module.scss'

const Login = ({setState}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    const test = () => {
        setState(false)
    }

    return (
        <div className={styles.loginWrp}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.loginHeader}>Войти</h3>
                <input className={styles.loginInput} {...register("email", {required: true})} placeholder='Login'/>
                <input className={styles.loginInput} {...register("password", {required: true})} placeholder='Password'/>
                <button className={styles.loginButton} type="submit">Войти</button>
            </form>
            <button className={styles.loginButton}
                    onClick={test}
            >Создать аккаунт</button>
        </div>
    )
}

export default Login