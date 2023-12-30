import backSvg from "../assets/backSvg.svg";

const Hero = ({ text }: { text: any }) => {
  return (
    <div className="flex justify-between md:bg-white md:h-28">
      <img className="md:hidden cursor-pointer" src={backSvg} alt="backSvg" />
      <h1
        className="font-bold md:flex md:items-end"
        style={{ fontSize: "25px" }}
      >
        {text}
      </h1>
      <div className="w-10 md:hidden"></div>
    </div>
  );
};
export default Hero;
