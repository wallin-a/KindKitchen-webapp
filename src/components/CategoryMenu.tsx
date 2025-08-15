import { useState } from "react";
import TabButton from "./TabButton";

const CategoryMenu = () => {
    const [selectedId, setSelectedId] = useState<number>(0);

    const handleSelect = (selectedButton: number) => {
        setSelectedId(selectedButton);
        console.log(selectedButton)
    }

    return (
        <section id="categpories" className="max-w  mx-auto py-8">
            <menu
                className="flex flex-wrap gap-2 p-2 rounded-xl bg-gray-50"
                role="tablist"
            >
            <TabButton
            isActive={selectedId === 0}
            onSelect={() => handleSelect(0)}
            >
            All recipes
            </TabButton>

            <TabButton
            isActive={selectedId === 3}
            onSelect={() => handleSelect(3)}
            >
            Mexican
            </TabButton>

            <TabButton
            isActive={selectedId === 7}
            onSelect={() => handleSelect(7)}
            >
            Indian
            </TabButton>

            <TabButton
            isActive={selectedId === 10}
            onSelect={() => handleSelect(10)}
            >
            Weekend Dinner
            </TabButton>
            </menu>
        </section>
    )
}

export default CategoryMenu;