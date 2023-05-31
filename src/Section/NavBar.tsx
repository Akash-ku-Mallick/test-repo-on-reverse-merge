import { Link } from "react-router-dom";
import Header from '../Section/Header';

function Navbar() {
  return(
    <section className="Navbar">
      <Header />
      <button>CONTEXT</button>
      <button>CONTACT</button>
      <button>ABOUT</button>
      <button>CAREER</button>
      <Link to="/Career">Career</Link>
      </section>
    )
}

function Navbar2() {
  return(
    <section className="Navbar bg-G">
      <button>CONTEXT</button>
      <button>CONTACT</button>
      <button>ABOUT</button>
      <button>CAREER</button>
      <Link to="/Career">Career</Link>
      </section>
    )
}


export {Navbar2}
export default Navbar