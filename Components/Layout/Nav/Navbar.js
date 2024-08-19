 import Link from "next/link";
// import { NavLink } from "./NavLink";
import styles from "./NavBar.module.scss";
import Image from "next/image";

 const NavBar = () => {
  return (
    <div>
      <div className={styles.container}  >
        <div className={styles.logo__box} >
          <Link href="/">
            <a>
              <div  className={styles.logo}>
                <Image src="/images/branding/logo.png" layout='fill'/>
              </div>
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
            {/* <li className={styles.Nav__Item} >
              <Link href="/">
                <a className={styles.Nav__Link} >Contact Us</a>
              </Link>
            </li> */}
          </ul>
          </nav>
        </div>
      <div className={styles.Nav__End} ></div>
    </div>
  )
}

export default NavBar;
