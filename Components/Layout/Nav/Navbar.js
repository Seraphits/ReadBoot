 import Link from "next/link";
// import { NavLink } from "./NavLink";
import styles from "./NavBar.module.scss"

 const NavBar = () => {
  return (
    <div>
      <div className={styles.container}  >
        <div className={styles.logo__box} >
          <Link href="/">
            <a>
              <img src="images/ branding/logo.png" className={styles.logo}/>
            </a>
          </Link>
        </div>
        <nav>
          <ul className={styles.Nav__List} >
            <li className={styles.Nav__Item} >
              <Link href="/">
                <a className={styles.Nav__Link} >Home</a>
              </Link>
            </li>
            <li className={styles.Nav__Item} >
              <Link href="/classes">
                <a className={styles.Nav__Link} >Classes</a>
              </Link>
            </li>
            <li className={styles.Nav__Item} >
              <Link href="/about">
                <a className={styles.Nav__Link} >About</a>
              </Link>
            </li>
            <li className={styles.Nav__Item} >
              <Link href="/">
                <a className={styles.Nav__Link} >Contact Us</a>
              </Link>
            </li>
          </ul>
          </nav>
        </div>
        <div className={styles.Nav__End} ></div>
    </div>
  )
}

export default NavBar;
