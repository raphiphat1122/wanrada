'use client'; // Ensure this component is a client component

import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLine, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './page.module.css';

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h5 className={styles.cardHeader}>Sign Up</h5>
                <div className={styles.cardBody}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <input 
                                type="text" 
                                className={styles.formControl} 
                                id="inputName" 
                                placeholder="Name" 
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input 
                                type="text" 
                                className={styles.formControl} 
                                id="inputSurname" 
                                placeholder="Surname" 
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <input 
                                type="email" 
                                className={styles.formControl} 
                                id="inputEmail" 
                                placeholder="Email" 
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.passwordGroup}>
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
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.passwordGroup}>
                                <input 
                                    type={showConfirmPassword ? 'text' : 'password'} 
                                    className={styles.formControl} 
                                    id="inputConfirmPassword" 
                                    placeholder="Confirm Password" 
                                />
                                <button 
                                    type="button" 
                                    className={styles.eyeButton} 
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <input 
                                type="checkbox" 
                                className={styles.formCheckInput} 
                                id="termsCheck" 
                            />
                            <label 
                                className={styles.formCheckLabel} 
                                htmlFor="termsCheck"
                            >
                                I agree to the terms and conditions
                            </label>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="#" className={`${styles.socialLink} ${styles.socialLinkFacebook}`}><FaFacebookF /></a>
                            <a href="#" className={`${styles.socialLink} ${styles.socialLinkInstagram}`}><FaInstagram /></a>
                            <a href="#" className={`${styles.socialLink} ${styles.socialLinkLine}`}><FaLine /></a>
                            <a href="#" className={`${styles.socialLink} ${styles.socialLinkEmail}`}><FaEnvelope /></a>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
