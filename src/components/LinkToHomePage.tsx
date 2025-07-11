import { Link } from "react-router-dom"
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

const LinkToHomePage = () => {

    return (
        <Link             
            to={"/"}>
            <div className="pb-4 flex items-center gap-2">
                <ChevronLeftIcon className="w-4 h-4 pl-0"/>
                <p className=" font-semibold text-gray-800">back to homepage</p>
            </div>
        </Link>
    )
}

export default LinkToHomePage;