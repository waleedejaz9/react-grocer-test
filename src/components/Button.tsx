interface buttonProps {
  text: string;
  customClassName?: string;
}
const Button = (props: buttonProps) => {
  return (
    <div>
      <button
        className={`px-5 py-2 bg-[#EA5323] text-white font-poppins hover:bg-[#EA5347] cursor-pointer ${props.customClassName || ""}`}
        style={{
          borderRadius: "50px",
          lineHeight: "37.5px",
          fontSize: "25px",
          fontWeight: "400",
          padding: "12px, 24px, 12px, 24px",
        }}
      >
        {props.text}
      </button>
    </div>
  );
};
export default Button;
