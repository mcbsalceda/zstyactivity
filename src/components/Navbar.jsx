import { Link } from "react-router-dom"
import './navbar.css'

export function Navbar() {
    return (
        <>
        <div className="navbar">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
        </div>
        </>
    )
}