import { Link } from "react-router-dom";
import Button from "../components/Button";

interface PriceSectionProps {
  price: number;
  Link?: string;
  buttonText: string;
  totalText: boolean;
  customClassName?: string;
}

const PriceSection = (props: PriceSectionProps) => {
  return (
    <div className={`flex gap-x-14 ${props.customClassName || ""}`}>
      <div className="flex flex-col">
        <p className="text-price font-Inter font-normal leading-5 text-base ">
          {props.totalText ? "Total" : "Price"}
        </p>
        <h2 className="text-buttonColor font-Inter leading-9 text-3xl font-medium">
          $ <span className="text-black">{props.price}</span>
        </h2>
      </div>
    <Link to={props.Link || "#"}>
      <Button text={props.buttonText} />
    </Link>
    </div>
  );
};

export default PriceSection;
