interface buttonProps {
  text: string;
  customClassName?: string;
}
const Button = (props: buttonProps) => {
  return (
    <div>
      <button
        className="px-5 py-2 bg-[#EA5323] text-white font-poppins hover:bg-orange-600 cursor-pointer"
        style={{
          borderRadius: "50px",
          lineHeight: "30px",
          fontSize: "21px",
          fontWeight: "400",
        }}
      >
        {props.text}
      </button>
    </div>
  );
};
export default Button;
