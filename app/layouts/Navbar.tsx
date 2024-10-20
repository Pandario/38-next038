import Image from "next/image";
import Link from "next/link";

function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-20">
            
            <div className="flex flex-row justify-between  items-center px-20 ">
                <Image 
                        src="/Nav/logo.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                        className="rounded-full p-2 hover:scale-110"
                />
                <div className="flex space-x-8 text-3xl">
                    <Link href="/" className="hover:opacity-75 hover:bg-slate-500 hover:rounded-full hover:scale-110 p-4 ">Dashboard</Link>
                    <Link href="/" className="hover:opacity-75 hover:bg-slate-500 hover:rounded-full hover:scale-110 p-4">Dashboard</Link>
                    <Link href="/" className="hover:opacity-75 hover:bg-slate-500 hover:rounded-full hover:scale-110 p-4">Dashboard</Link>
                    <Link href="/" className="hover:opacity-75 hover:bg-slate-500 hover:rounded-full hover:scale-110 p-4">Dashboard</Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar;