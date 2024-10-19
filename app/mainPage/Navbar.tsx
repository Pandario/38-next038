import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <div className="navigation bg-slate-400 flex flex-row justify-between  items-center">
            <Image 
                      src="/Nav/logo.png"
                      width={100}
                      height={100}
                      alt="Picture of the author"
            />
            <div className="flex space-x-8 text-3xl">
                <Link href="/" className="hover: text-red-600">Dashboard</Link>
                <Link href="/">Dashboard</Link>
                <Link href="/">Dashboard</Link>
                <Link href="/">Dashboard</Link>
            </div>
        </div>
    )
}

export default Navbar;