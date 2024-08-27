'use client'; // Ensure this is a client-side component for React hooks

import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './page.module.css'; // Import your CSS module

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h5 className={styles.cardHeader}>Sign ln</h5>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={styles.formControl} 
                            id="inputUsername" 
                            placeholder="Username" 
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            className={styles.formControl} 
                            id="inputPassword" 
                            placeholder="Password" 
                        />
                        <button 
                            type="button" 
                            className={styles.eyeButton} 
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className={styles.forgotPassword}>
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>

                    <div className={styles.submitContainer}>
                        <button type="submit" className={styles.submitButton}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
