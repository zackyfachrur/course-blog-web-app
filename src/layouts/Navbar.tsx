import { useEffect, useState } from "react";
import Avatar from "/Bxaric-Logo.png";
import NavbarLogo from "/Bxaric-Logo.png";
import { User } from "@type/AuthType";

const Navbar = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (authToken) {
      const [email] = atob(authToken).split(":");
      const user = users.find((user: User) => user.email === email);
      if (user) setUserName(user.namaLengkap);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUserName("");
    window.location.reload();
  };

  return (
    <nav className="w-full h-[80px] bg-slate-800 flex justify-around items-center py-4 fixed z-50">
      <img src={NavbarLogo} width={200} alt="Navbar Logo" className="flex" />
      <ul className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-3">
          {userName ? (
            <>
              <button
                onClick={handleLogout}
                className="px-4 py-1 font-semibold text-white bg-red-500 border-2 border-red-500 rounded-lg hover:bg-red-600"
              >
                Log Out
              </button>
              <li className="cursor-pointer hover:text-gray-200">Kategori</li>
              <button
                className="hover:text-gray-200"
                onClick={() => window.location.assign("/buat-postingan")}
              >
                Unggah Postingan
              </button>
              <img src={Avatar} alt="" />
            </>
          ) : (
            <>
              <a href="/auth/login">
                <button className="px-5 py-2 font-semibold text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-600">
                  Login
                </button>
              </a>
              <a href="/auth/register">
                <button className="px-5 py-2 font-semibold text-green-500 bg-white rounded-lg cursor-pointer hover:bg-gray-50">
                  Register
                </button>
              </a>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
