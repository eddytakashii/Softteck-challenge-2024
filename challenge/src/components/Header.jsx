const Header = () => {
    return (
        <div className="flex justify-end p-4  bg-gray-800 text-white rounded-md">
            <ul className="flex space-x-4">
                <li>
                    <a href="#login" className="hover:underline">Login</a>
                </li>
                <li>
                    <a href="#menu" className="hover:underline">Menu Inicial</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
