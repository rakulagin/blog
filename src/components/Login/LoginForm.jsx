import React, {useState} from "react";

import Login from "./Login";
import Auth from "./Auth";

import styles from './Login.module.scss'

const LoginForm = () => {
    const [accountExist, setAccountExist] = useState(true)



    return (
        <div className={styles.loginWrp}>
            {accountExist ?
                <Login
                    setAccountExist={setAccountExist}
                />
                :
                <Auth/>
            }
        </div>
    )
}

export default LoginForm