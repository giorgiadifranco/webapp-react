import { NavLink } from "react-router-dom"

export default function Header(){

    return(

        <header className='bg-dark text-danger py-3 px-4 text-center'>
            <nav>
            <NavLink to='/' className='text-decoration-none text-danger'><strong><h1>Movies Rating</h1></strong></NavLink>
            </nav>
        </header>


    )
}