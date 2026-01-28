import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  };
  return (
    // <aside
    //   className={`
    // w-64 bg-gray-800 text-white h-full fixed transform transition-transform duration-300 ease-in-out
    // ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    // >
    <aside
      className="
    w-64 bg-gray-800 text-white h-full fixed"
    >
      <div className="p-4">
        {/* <h2 className="text-xl font-bold mb-4">EXPERT SYSTEM</h2> */}
        <Link to="/dashboard" className="text-lg font-bold mb-5">
          EXPERT SYSTEM COFFEE
        </Link>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/informasi-kopi" className="block p-2 hover:bg-gray-700 rounded">
                Informasi Kopi Arabica
              </Link>
            </li>
            <li>
              <Link to="/data-cupping-pakar" className="block p-2 hover:bg-gray-700 rounded">
                Data Cupping Oleh Pakar
              </Link>
            </li>
            <li>
              <Link to="/variabel-cupping" className="block p-2 hover:bg-gray-700 rounded">
                Variabel Cupping
              </Link>
            </li>
            <li>
              <Link to="/ciri variabel cupping" className="block p-2 hover:bg-gray-700 rounded">
                Ciri Variabel Cupping
              </Link>
            </li>
            <li>
              <Link to="/pengujian" className="block p-2 hover:bg-gray-700 rounded">
                Pengujian
              </Link>
            </li>
            <li>
              <Link to="/hasil-pengujian" className="block p-2 hover:bg-gray-700 rounded">
                Hasil Pengujian
              </Link>
            </li>
            <div className="text-center">
              <button onClick={toggleSidebar} className="bg-gray-500 rounded-full px-4 py-2 font-bold">
                {"<"}
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
