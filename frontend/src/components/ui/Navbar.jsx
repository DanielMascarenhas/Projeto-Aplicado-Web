import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const currentOnLogin = location.pathname === "/login";
  const currentOnSignup = location.pathname === "/signup";

  return (
    <div className="flex justify-between items-center bg-blue-500 p-3">
      {user ? (
        <>
          <Link className="my-2" to="/dashboard">
            <span className="text-3xl ml-2 text-white drop-shadow-md">
              Recycle
            </span>
          </Link>
          <ul className="flex gap-3 mr-5">
            <Link className="align-middle" to="/materials">
              <li className="click bg-gray-100 text-blue-500 hover:bg-gray-300 p-2 rounded-sm drop-shadow-md">
                Materiais
              </li>
            </Link>
            <Link className="align-middle" to="/stock">
              <li className="click bg-gray-100 text-blue-500 hover:bg-gray-300 p-2 rounded-sm drop-shadow-md">
                Estoque
              </li>
            </Link>
          </ul>
        </>
      ) : (
        <>
          <Link className="my-2" to="/">
            <span className="text-3xl ml-2 text-white drop-shadow-md">
              Recycle
            </span>
          </Link>
          <ul className="flex gap-3 mr-5">
            {!currentOnLogin && (
              <Link className="align-middle" to="/login">
                <li className="click bg-gray-100 text-blue-500 hover:bg-gray-300 p-2 rounded-sm drop-shadow-md">
                  Login
                </li>
              </Link>
            )}
            {!currentOnSignup && (
              <Link className="align-middle" to="signup">
                <li className="click bg-gray-100 text-blue-500 hover:bg-gray-300 p-2 rounded-sm drop-shadow-md">
                  Registrar
                </li>
              </Link>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
