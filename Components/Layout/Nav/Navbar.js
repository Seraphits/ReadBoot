 import Link from "next/link";
// import { NavLink } from "./NavLink";
import styles from "./NavBar.module.scss"

 const NavBar = () => {
  return (
    <div className={styles.container}  >
      <div className={styles.logo} >
        <img src="images/logo.png" />
      </div>
      <nav>
        <ul>
          <li className={styles.Nav__Item} >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.Nav__Item} >
            <Link href="/classes">
              <a>Classes</a>
            </Link>
          </li>
          <li className={styles.Nav__Item} >
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.Nav__Item} >
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
        </nav>
    </div>
  )
}

export default NavBar;
