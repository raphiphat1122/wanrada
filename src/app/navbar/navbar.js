import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${styles.transparentNavbar}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/CMTC.png" alt="..." width={197} height={40} className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
