"use client"
import Link from "next/link"
import styles from "./navLink.module.css"
import { usePathname } from "next/navigation"

const NavLink=({item})=>{
    //Get the current path
    const pathname = usePathname();
    const isActive= pathname===item.path;

    return(
        <div>
            <Link href={item.path} className={`${styles.container} ${isActive ? styles.active : ''}`}>{item.title}</Link>
        </div>
    )
}
export default NavLink;