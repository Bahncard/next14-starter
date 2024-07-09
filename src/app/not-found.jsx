import Link from "next/link";
const NotFound=()=>{
    return(
        <>
        <h2>NotFound</h2>
        <p>Sorry the page is not found.</p>
        <Link href="/">Return HomePage</Link>
        </>
    );
}
export default NotFound;