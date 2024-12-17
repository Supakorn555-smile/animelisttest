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
                    <a href="/" className="text-gray-300 text-2xl hover:text-white">
                        Home
                    </a>
                    <a href="/season" className="text-gray-300 text-2xl hover:text-white">
                        Season
                    </a>
                    <a href="/favorite" className="text-gray-300 text-2xl hover:text-white">
                        Favorite
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
