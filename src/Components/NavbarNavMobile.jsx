import { useEffect, useState } from "react";
import Avatar from "../assets/img/Avatar.png";
import NavbarLogo from "../assets/img/Navbar-Logo.png";

function NavbarNavs() {
  const [userName, setUserName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (authToken) {
      const [email] = atob(authToken).split(":");
      const user = users.find((user) => user.email === email);
      if (user) setUserName(user.namaLengkap);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUserName("");
    window.location.reload();
  };

  return (
    <nav className="w-full h-[80px] bg-white flex justify-between items-center py-4 fixed z-50 px-4 md:px-8">
      <img src={NavbarLogo} alt="Navbar Logo" className="flex" />
      <div className="flex items-center gap-2 md:gap-4">
        {userName ? (
          <>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <img src={Avatar} alt="" className="w-8 h-8 rounded-full" />
          </>
        ) : (
          <>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <a href="/login">
              <button className="px-5 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg">
                Login
              </button>
            </a>
            <a href="/register">
              <button className="px-5 py-2 font-semibold text-green-500 bg-white hover:bg-gray-50 rounded-lg">
                Register
              </button>
            </a>
          </>
        )}
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center">
            {userName ? (
              <>
                <span className="font-semibold text-black">
                  Hello, {userName}
                </span>
                <button
                  onClick={handleLogout}
                  className="my-2 px-4 py-1 font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg w-52"
                >
                  Log Out
                </button>
                <button
                  className="bg-green-500 my-2 px-4 py-1 rounded-lg text-white font-semibold hover:bg-green-600 w-52"
                  onClick={() => window.location.assign("/buat-postingan")}
                >
                  Unggah Postingan
                </button>
              </>
            ) : (
              <>
                <a href="/login">
                  <button className="my-2 px-5 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg">
                    Login
                  </button>
                </a>
                <a href="/register">
                  <button className="my-2 px-5 py-2 font-semibold text-green-500 bg-white hover:bg-gray-50 rounded-lg">
                    Register
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarNavs;
