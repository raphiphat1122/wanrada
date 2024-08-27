"use client";

import { useState } from "react";
import Image from "next/image";
import styles from './Card.module.css'; // คุณต้องสร้างไฟล์ CSS สำหรับสไตล์

export default function Card() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "/assets/img/1.jpg",
        "/assets/img/2.jpg",
        "/assets/img/3.jpg",
        "/assets/img/4.jpg",
        "/assets/img/5.jpg",
        "/assets/img/6.jpg",
        "/assets/img/7.jpg",
        "/assets/img/8.jpg",
        "/assets/img/9.jpg",
        "/assets/img/10.jpg"
    ];

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div style={{ width: '100vw', height: '100vh', padding: '20px', boxSizing: 'border-box', position: 'relative' }}>
            <Image 
                src={images[currentImageIndex]} 
                layout="fill" 
                objectFit="contain" 
                alt={`Image ${currentImageIndex + 1}`} 
            />
            <button 
                onClick={goToPreviousImage} 
                className={styles.arrowButton} 
                style={{ left: '10px' }}
            >
                &#9664;
            </button>
            <button 
                onClick={goToNextImage} 
                className={styles.arrowButton} 
                style={{ right: '10px' }}
            >
                &#9654;
            </button>
        </div>
    );
}
