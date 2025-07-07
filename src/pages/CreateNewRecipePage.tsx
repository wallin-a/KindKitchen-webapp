import { useForm, useFieldArray } from "react-hook-form";
import { postRecipe } from "../api/RecipeApi";
import toast from 'react-hot-toast';
import axios from "axios";
import { CreateNewRecipe } from "../Interfaces/CreateNewRecipe";

const CreateNewRecipePage = () => {

    const { register, handleSubmit, control, reset, getValues, setValue, formState: { errors } } = useForm<CreateNewRecipe>({
        defaultValues: {
            steps: [""],
            ingredients: [{ name: "", quantity: "" }],
        },
    });

    const addStep = () => setValue("steps", [...getValues("steps"), ""]);
    const removeStep = (index: number) => {
        const updatedSteps = [...getValues("steps")];
        updatedSteps.splice(index, 1);
        setValue("steps", updatedSteps);
    };
    const { fields: ingredientFields, append: appendIngredient, remove: removeIngredient } = useFieldArray({ control, name: "ingredients" });

    const onSubmit = async (data: CreateNewRecipe) => {
        try {
            await postRecipe(data);
            toast.success("Recipe created successfully!");
            reset();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 400) {
                toast.error("Validation error: Please check your input.");
            } else {
                toast.error("Error creating recipe. Please try again.");
            }
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Create New Recipe</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                    <label className="font-medium">Title</label>
                    <input {...register("title", { required: "Title is required" })} placeholder="Title" className="border p-2 w-full" />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                <div>
                    <label className="font-medium">Description</label>
                    <input {...register("description")} placeholder="Description" className="border p-2 w-full" />
                </div>

                <div>
                    <label className="font-medium">Category</label>
                    <input {...register("category", { required: "Category is required" })} placeholder="Category" className="border p-2 w-full" />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                </div>

                <div>
                    <label className="font-medium">Cooking Time (minutes)</label>
                    <input type="number" {...register("cookingTime", { valueAsNumber: true, required: "Cooking time is required", min: { value: 0, message: "Cooking time cannot be negative" } })} placeholder="Cooking Time (minutes)" className="border p-2 w-full" />
                    {errors.cookingTime && <p className="text-red-500 text-sm">{errors.cookingTime.message}</p>}
                </div>

                <div>
                    <label className="font-medium">Servings</label>
                    <input type="number" {...register("servings", { valueAsNumber: true, required: "Servings is required", min: { value: 0, message: "Servings cannot be negative" } })} placeholder="Servings" className="border p-2 w-full" />
                    {errors.servings && <p className="text-red-500 text-sm">{errors.servings.message}</p>}
                </div>

                <div>
                    <label className="font-medium">Image URL</label>
                    <input {...register("imageUrl")} placeholder="Image URL" className="border p-2 w-full" />
                </div>

                <div>
                    <h2 className="text-xl font-semibold mt-4">Steps</h2>
                    {getValues("steps").map((_, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <label className="w-6 text-center">{index + 1}</label>
                            <input {...register(`steps.${index}`, { required: "Step instruction is required" })} placeholder={`Instruction for step ${index + 1}`} className="border p-2 flex-1" />
                            <button type="button" onClick={() => removeStep(index)} className="text-red-500">Remove</button>
                        </div>
                    ))}
<button type="button" onClick={addStep} className="text-blue-500 mt-2">Add Step</button>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
                    {ingredientFields.map((field, index) => (
                        <div key={field.id} className="flex items-center gap-2 mb-2">
                            <div className="flex flex-col">
                                <label className="font-medium">Quantity</label>
                                <input {...register(`ingredients.${index}.quantity`, { required: "Quantity is required" })} placeholder="Quantity" className="border p-2 w-32" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="font-medium">Ingredient Name</label>
                                <input {...register(`ingredients.${index}.name`, { required: "Ingredient name is required" })} placeholder="Ingredient Name" className="border p-2 w-full" />
                            </div>
                            <button type="button" onClick={() => removeIngredient(index)} className="text-red-500 mt-6">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => appendIngredient({ name: "", quantity: "" })} className="text-blue-500 mt-2">Add Ingredient</button>
                </div>

                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Create Recipe</button>
            </form>
        </div>
    )
}

export default CreateNewRecipePage;