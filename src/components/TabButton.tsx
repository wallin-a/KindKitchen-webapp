import { MouseEventHandler, ReactNode } from "react";


type TabButtonProps = {
  children: ReactNode;
  onSelect: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
};

const TabButton = ({ children, onSelect, isActive = false }: TabButtonProps) => {

    const base =
        "px-4 py-2 rounded-xl text-sm font-medium transition border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
    const active =
        "bg-emerald-100 text-gray border-emerald-200 focus:ring-emerald-200";
    const inactive =
        "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50 focus:ring-emerald-400";

    return (
        <li>
            <button
                role="tab"
                aria-selected={isActive}
                onClick={onSelect}
                className={`${base} ${isActive ? active : inactive}`}
            >
                {children}
            </button>
        </li>
    )
}

export default TabButton;