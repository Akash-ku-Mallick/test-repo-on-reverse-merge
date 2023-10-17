import { Link } from "react-router-dom"
import './App.css'

function ErrorPage () {
    return(
        <div id='ErrorPage' className="ErrorPage">
            <>
            <h1>We are sorry for this! </h1>
            <h2>But an error has occoured during loading the page. Pleae go back to the home screen.</h2>
            </>
            <p>Click here to redirect <Link to="/">Home</Link></p>
        </div>
    )
}

export default ErrorPage