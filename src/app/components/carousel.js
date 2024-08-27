import Image from "next/image";
import styles from './Carousel.module.css';

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.coverPhoto}>
        <Image src="/assets/img/34872_0.jpg" alt="Cover Photo" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profilePicture}>
          <Image src="/assets/img/34873_0.jpg" alt="Profile Picture" width={150} height={150} />
        </div>
        <div className={styles.profileDetails}>
          <h1 className={styles.profileName}>Your Name</h1>
          <p className={styles.profileBio}>A short bio or tagline goes here.</p>
        </div>
      </div>
      <div className={styles.profileTabs}>
        <button className={styles.tabButton}>Posts</button>
        <button className={styles.tabButton}>About</button>
        <button className={styles.tabButton}>Friends</button>
        <button className={styles.tabButton}>Photos</button>
      </div>
      <div className={styles.profileContent}>
        {/* เพิ่มเนื้อหา เช่น โพสต์ ข้อมูลเกี่ยวกับ ฯลฯ */}
      </div>
    </div>
  );
}
