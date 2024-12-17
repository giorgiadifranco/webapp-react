import { Link } from "react-router-dom"
export default function Footer(){

    return(

        <>
        
        <footer className="bg-dark text-light py-3">
            <div className="container">
                <div className="row">
                        <div className="col-md-6 col-lg-3 mb-3">
                            <Link className='text-decoration-none text-white link-warning'><h5>About us</h5></Link>
                    
                            <ul className="list-unstyled">
                                <li></li>
                            </ul> 
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                        <Link className='text-decoration-none text-white link-warning'><h5>Services</h5></Link>
                    
                            <ul className="list-unstyled">
                                <li></li>
                            </ul> 
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                        <Link className='text-decoration-none text-white link-warning'><h5>FAQ</h5></Link>
                    
                            <ul className="list-unstyled">
                                <li></li>
                            </ul> 
                        </div>
                        <div className="col-md-6 col-lg-3 mb-3">
                        <Link className='text-decoration-none text-white link-warning'><h5>Privacy Policy</h5></Link>
                    
                            <ul className="list-unstyled">
                                <li></li>
                            </ul> 
                        </div>
                </div>
            </div>

        </footer>
        
        
        </>
    )
}