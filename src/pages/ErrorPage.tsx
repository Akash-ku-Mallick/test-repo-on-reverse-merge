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
            <a href="mailto:akashkumarmallick@outlook.com">Mail me with this isuue if possible.</a>
        </div>
    )
}

export default ErrorPage