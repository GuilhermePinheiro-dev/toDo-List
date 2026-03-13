import IconSun from "../../../public/images/icon-sun.svg"


export const TodoHeader = () => {
    return (
        <header className="flex justify-between mb-6 pt-20">
            <h1 className="font-bold text-[2.5rem] text-white tracking-[1rem]">TODO</h1>

            <button className="cursor-pointer w-8 h-8">
                <img src={IconSun} alt="Alternar tema" />
            </button>
        </header>
    )
}