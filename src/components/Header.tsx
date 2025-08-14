import { Link } from "react-router-dom";

interface HeaderProps {
    title: string;
    link: string;
}

const Header = (props: HeaderProps) => {

    return (
        <Link             
            to={props.link}>
            <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 mt-10 underline decoration-dashed font-sans">
                {props.title}
            </h1>
            </div>
        </Link>
    )
}

export default Header;