import Button from "../components/Button";

interface PriceSectionProps {
  price: number;
  buttonText: string;
}

const PriceSection = (props: PriceSectionProps) => {
  return (
    <div className="flex gap-x-14">
      <div className="flex flex-col">
        <p className="text-price font-Inter font-normal leading-5 text-base ">
          Total
        </p>
        <h2 className="text-buttonColor font-Inter leading-9 text-3xl font-medium">
          $ <span className="text-black">
            {props.price}
          </span>
        </h2>
      </div>

      <Button text={props.buttonText} />
    </div>
  );
};

export default PriceSection;
