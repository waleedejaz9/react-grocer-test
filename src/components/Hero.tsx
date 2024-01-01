import backSvg from "../assets/backSvg.svg";

const Hero = ({ text }: { text: any }) => {
  return (
    <div className="flex md:flex-col justify-between md:bg-white md:h-28 md:mt-0 mt-8">
      <img className="cursor-pointer md:w-6 md:mt-5" src={backSvg} alt="backSvg" />
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
