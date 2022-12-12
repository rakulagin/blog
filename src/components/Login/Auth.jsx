import React from "react";
import {useForm} from 'react-hook-form'

import styles from './Login.module.scss'

const Auth = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className={styles.loginWrp}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.loginHeader}>Создать аккаунт</h3>
                <input className={styles.loginInput} {...register("login", {required: true})} placeholder='Login'/>
                <input className={styles.loginInput} {...register("password", {required: true})} placeholder='Password'/>
                <button className={styles.loginButton} type="submit">Создать Аккаунт</button>
            </form>
            <button className={styles.loginButton}>Уже есть аккаунт</button>
        </div>
    )
}

export default Auth