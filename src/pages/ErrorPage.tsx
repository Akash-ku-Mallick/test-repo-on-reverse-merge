import { Link } from "react-router-dom"

function ErrorPage () {
    return(
        <div id='ErrorPage'>
            <h1>404</h1>
            <h2>Error</h2>
            <button></button>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ErrorPage