import Link from "next/link"
import { AngelIcon } from "../svg/AngelIcon"

export const NavigationBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-2xl">
                    <div className="mr-2">
                        <AngelIcon/>
                    </div>
                    ChatRevive
                </Link>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/terms">Terms & Conditions</Link>
                </li>
                </ul>
            </div>
            <div className="navbar-end"/>
            </div>
    )
}