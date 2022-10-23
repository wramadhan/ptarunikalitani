import Link from "next/link"

const Button = ({ value, link }) => {
    return (
        <div className="w-full flex justify-center">
            <button onClick={link} className="hover:shadow-inner hover:shadow-white active:text-white/50 active:shadow-black w-full hp:w-[432px] font-bold text-white text-base bg-secondary py-3 rounded-lg mx-auto mt-8 mb-8">
                {value}
            </button>
        </div>
    )
}

export default Button