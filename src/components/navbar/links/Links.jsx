import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "../navLink/navLink";
const Links= () =>{
const links = [
    {
        title:"HomePage",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contact"
    },
    {
        title:"Blog",
        path:"/blog"
    },

];
// use () to wrap a implicit return and {} to wrap a return
// 如果要用组件替代下面，肯定要把link对象传到子组件里面，所以父组件要有一个参数用来传link；子组件要有一个参数用来接受link 
//<Link href={link.path} key={link.path}>{link.title}</Link>
return (
    <div className={styles.container}>
    {links.map(link=>(
        <NavLink item={link}  key={link.path}/>
    ))}
    </div>
)
}
export default Links;