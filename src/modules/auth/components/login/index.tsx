import { useState } from 'react';
import style from './style.module.scss'

type Props = {}

const Login = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleLogin = (e: any) => {
        e.preventDefault()
    }
    return (
        <div className={style.login}>
            <div className={style.main}>
                <div className={style.loginLogo}>
                    <a>
                        <img src='https://stg.canawan.com/logos-canawan/CANAWAN-2000-2000.png' alt='Logo' className={style.loginLogoImg} />
                    </a>
                </div>
                <div>
                    <div className={style.title}>
                        <h2>Sign In To Canawan</h2>
                        <p>Enter your details to login your account</p>
                    </div>
                    <div>
                        <form className={style.loginFormGroup} onClick={(e) => handleLogin(e)}>
                            <div className={style.loginForm}>
                                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={style.loginForm}    >
                                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className={style.group}>
                                <div className={style.button}>
                                    <button>Sign In</button>
                                </div>
                                <div className={style.button}>
                                    <button>Sign In with Microsoft</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login