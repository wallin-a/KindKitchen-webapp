import { Link } from "react-router-dom";

interface RecipeCardProps {
    id: number;
    imageUrl: string;
    title: string;
}

const RecipeCard = (props: RecipeCardProps) => {

    return (
        <Link
            key={props.id}
            className="block bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden" 
            to={`/recipe/${props.id}`}
            >
            <img
              src={props.imageUrl}
              alt={props.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{props.title}</h3>
            </div>
          </Link>
    )
}

export default RecipeCard;