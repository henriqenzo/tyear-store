import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import styles from './login.module.css'

import { GoogleLogo } from '@phosphor-icons/react'

export const Login = () => {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <h1>CONECTE-SE AQUI</h1>
                <div className={styles.forms}>
                    <div className={`${styles.loginForm} ${styles.form}`}>
                        <h4>Faça login</h4>
                        <label>
                            <span>Email</span>
                            <input type="email" placeholder="Digite aqui" />
                        </label>
                        <label>
                            <span>Senha</span>
                            <input type="password" placeholder="Digite aqui" />
                        </label>
                        <a href="#" className={styles.forgotPassword}>Esqueci minha senha</a>
                        <button>ENTRAR</button>
                        <button className={styles.loginWithGoogle}>
                            <div className={styles.logoBox}><GoogleLogo size={20} weight="bold" /></div>
                            <p>ENTRAR COM GOOGLE</p>
                        </button>
                    </div>

                    <div className={`${styles.registerForm} ${styles.form}`}>
                        <h4>Criar conta</h4>
                        <div className={styles.twoInRow}>
                            <label>
                                <span>Nome</span>
                                <input type="email" placeholder="Digite aqui" />
                            </label>
                            <label>
                                <span>Sobrenome</span>
                                <input type="password" placeholder="Digite aqui" />
                            </label>
                        </div>
                        <label>
                            <span>Email</span>
                            <input type="password" placeholder="Digite aqui" />
                        </label>
                        <div className={styles.twoInRow}>
                            <label>
                                <span>Senha</span>
                                <input type="email" placeholder="Digite aqui" />
                            </label>
                            <label>
                                <span>Confirme a senha</span>
                                <input type="password" placeholder="Digite aqui" />
                            </label>
                        </div>
                        <button>CADASTRAR</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}