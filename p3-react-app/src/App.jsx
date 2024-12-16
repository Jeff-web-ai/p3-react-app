// Libraries
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import View from "./pages/View";
import LinkCardPage from "./pages/LinkCardPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Create />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/linkcard/:id" element={<LinkCardPage />} />
      </Routes>
    </>
  );
}

export default App;
