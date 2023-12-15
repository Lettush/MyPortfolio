import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Test Page</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/1">Page 1</Link>
                        <Link to="/2">Page 2</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
