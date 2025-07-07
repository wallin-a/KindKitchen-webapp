import { Link } from "react-router-dom";

const Header = () => {

    return (
        <Link             
            to={"/"}>
            <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 mt-10 underline decoration-dashed font-sans">
                Kind Kitchen
            </h1>
            </div>
        </Link>
    )
}

export default Header;