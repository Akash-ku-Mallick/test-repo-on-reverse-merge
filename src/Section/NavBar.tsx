import { Link } from "react-router-dom";

function Navbar() {
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

export default Navbar