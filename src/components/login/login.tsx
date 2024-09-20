'use client';

import React, { useState, useRef } from 'react';
import styles from './Login.module.css'; 

const Login: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [role, setRole] = useState<string>('comprador');


    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(event.target.value);
    };

    const handleRegisterClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.add(styles.active);
        }
    };

    const handleLoginClick = () => {
        if (containerRef.current) {
            containerRef.current.classList.remove(styles.active);
        }
    };

    return (
        <>
            <div className={styles.background}>
                <div className={styles.container} id="container" ref={containerRef}>

                    <div className={`${styles['form-container']} ${styles['sign-up']}`}>
                        <form>
                            <h1>Create Account</h1>
                            <div className={styles['social-icons']}>
                            </div>
                            <span>Use su correo para registrarse.</span>
                            <input type="text" placeholder="Nombre" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Contraseña" />
                            <select value={role} onChange={handleRoleChange}>
                                <option value="1">Comprador</option>
                                <option value="2">Vendedor</option>
                            </select>
                            <button>Sign Up</button>
                        </form>
                    </div>

                    <div className={`${styles['form-container']} ${styles['sign-in']}`}>
                        <form>
                            <h1>Sign In</h1>
                            <div className={styles['social-icons']}>
                            </div>
                            <span></span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Contraseña" />
                            <button>Sign In</button>
                        </form>
                    </div>

                    <div className={styles['toggle-container']}>
                        <div className={styles.toggle}>
                            <div className={`${styles['toggle-panel']} ${styles['toggle-left']}`}>
                                <h1>Bienvenido de nuevo!</h1>
                                <p>Introduzca sus datos personales para utilizar todas las funciones del sitio</p>
                                <button className={styles.hidden} id="login" onClick={handleLoginClick}>Sign In</button>
                            </div>
                            <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
                                <h1>Sea Bienvenido</h1>
                                <p>Regístrese con sus datos personales para utilizar todas las funciones del sitio.</p>
                                <button className={styles.hidden} id="register" onClick={handleRegisterClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Login;