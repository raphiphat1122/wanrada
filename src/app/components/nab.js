import Link from 'next/link';
import styles from './nab.module.css';

export default function Nab() {
  return (
    <div className="container-fluid">
      <footer className={`py-3 bg-light fixed-bottom ${styles.footer}`}>
        <div className="d-flex justify-content-between">
          <Link href="/" legacyBehavior>
            <a className={`btn btn-link d-flex flex-column align-items-center ${styles.link}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-house mb-1 ${styles.icon}`} viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
              </svg>
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={`btn btn-link d-flex flex-column align-items-center ${styles.link}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-info-circle mb-1 ${styles.icon}`} viewBox="0 0 16 16">
                <path d="M8 7a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5A.5.5 0 0 0 8 8V7.5a.5.5 0 0 0-.5-.5zM8 5a.5.5 0 0 0-.5.5V6a.5.5 0 0 0 .5.5A.5.5 0 0 0 8 6V5.5A.5.5 0 0 0 7.5 5zM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0-1A7 7 0 1 1 1 8a7 7 0 0 1 7-7z"/>
              </svg>
              About
            </a>
          </Link>
          <Link href="/service" legacyBehavior>
            <a className={`btn btn-link d-flex flex-column align-items-center ${styles.link}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-briefcase mb-1 ${styles.icon}`} viewBox="0 0 16 16">
                <path d="M4.5 0a.5.5 0 0 1 .5.5V1h7V.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V1h1v1H2V1h1V.5a.5.5 0 0 1 .5-.5h3zm-.5 1V2h7V1H4zm-2.5 3H1v11h14V4h-1v11H2V4zm14-1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h15z"/>
              </svg>
              Service
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={`btn btn-link d-flex flex-column align-items-center ${styles.link}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-envelope mb-1 ${styles.icon}`} viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 1.5v7h12v-7H2zm1 1h10v-1H3v1zm9-1v-1H4v1h8z"/>
              </svg>
              Contact
            </a>
          </Link>
          <Link href="/other" legacyBehavior>
            <a className={`btn btn-link d-flex flex-column align-items-center ${styles.link}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-three-dots mb-1 ${styles.icon}`} viewBox="0 0 16 16">
                <path d="M4 8a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
              </svg>
              อื่นๆ
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
