import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <img
                        src="/images/Logo.jpg"
                        className="max-h-40 bg-black border border-black-1000 rounded-lg"
                        alt="Logo"
                    />
                </div>

                {/* Menu */}
                <div className="space-x-6">
                    <Link to={"/"} className="text-gray-300 text-2xl hover:text-white">
                        Home
                    </Link>
                    <Link to={"/season"} className="text-gray-300 text-2xl hover:text-white">
                        Season
                    </Link>
                    <Link to={"/favorite"} className="text-gray-300 text-2xl hover:text-white">
                        Favorite
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
