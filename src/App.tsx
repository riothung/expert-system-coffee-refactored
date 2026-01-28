import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";
// import { useState } from "react";
function App() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen((prev) => !prev);
  // };

  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          {/* <header className="p-4 shadow">
            <button onClick={toggleSidebar} className="rounded-md bg-black px-4 py-2 text-white">
              Toggle Sidebar
            </button>
          </header> */}
          <div className="flex-1 ml-64">
            <Header />
            <main className="p-6">
              <Dashboard></Dashboard>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
