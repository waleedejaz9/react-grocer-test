interface buttonProps {
    text: string,
    customClassName?: string
}
const Button = (props: buttonProps) => {
    return (
        <div>
            <button className="px-4 py-2 bg-[#EA5323] text-white font-poppins hover:bg-orange-600 " style={{ borderRadius: "50px", lineHeight: "37.5px", fontSize:"25px", fontWeight:"400" }}>
                {props.text}
            </button>
        </div>
    )
}
export default Button;