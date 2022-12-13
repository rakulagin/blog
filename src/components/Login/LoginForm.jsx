import React, {useState} from "react";

import Login from "./Login";
import Auth from "./Auth";

import styles from './Login.module.scss'

const LoginForm = () => {
    const [accountExist, setAccountExist] = useState(true)

    return (
        <>
            {accountExist ?
                <Login
                    setState={setAccountExist}
                />
                :
                <Auth setState={setAccountExist}/>
            }
        </>
    )
}

export default LoginForm