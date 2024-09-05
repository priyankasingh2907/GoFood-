import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
     <div className="bg-success p-3 text-white d-flex justify-content-between">
     <div>
     <h1>GoFood</h1>
     </div>
     <div>
        <ul className="nav gap-4">
     <Link className="text-white text-decoration-none" to="/">Home</Link>
     <Link className="text-white text-decoration-none" to="/login">Login</Link>
     <Link className="text-white text-decoration-none" to="/signup">SignUp</Link>
     <Link className="text-white text-decoration-none" to="/">Conatct</Link>
        </ul>
     </div>
    

      </div>
    </>
  );
}
