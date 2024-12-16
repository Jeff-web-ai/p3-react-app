import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-sky-400 text-sky- py-4 shadow-lg font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <h1>LinkCard</h1>
        </Link>
        <nav className="space-x-8">
          <Link
            to="/dashboard"
            className="text-lg hover:text-blue-300 transition-colors duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/create"
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Create
          </Link>
          <Link to="/edit/:id"></Link>
          <Link to="/view/:id"></Link>
          <Link to="/linkcard/:id"></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
