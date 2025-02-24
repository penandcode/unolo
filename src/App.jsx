import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import InDevelopment from "./pages/InDevelopment";
import Sidebar from "./components/Sidebar";

function AppWrapper() {
  const location = useLocation();

  return (
    <div className="flex bg-white">
      <Routes>
        <Route path="/" element={<Homepage user={JSON.parse(localStorage.getItem("user"))} />} />
        <Route path="/dashboard" element={
          <>
            <Sidebar currentPath={location.pathname} />
            <div className="flex flex-wrap bg-amber-50 w-full">
              <div className="flex-grow min-h-[100vh] w-1/2">
                <Dashboard />
              </div>
            </div>
          </>
        } />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
