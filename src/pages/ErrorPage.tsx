import { Link } from "react-router-dom"
import './App.css'

function ErrorPage () {
    return(
        <div id='ErrorPage' className="ErrorPage">
            <>
            <h1>404</h1>
            <h2>Error</h2>
            </>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ErrorPage