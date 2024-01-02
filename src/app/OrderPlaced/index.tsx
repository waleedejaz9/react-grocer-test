import { Link } from "react-router-dom";
import Container from "../../components/Container";

import Button from "../../components/Button";
import checkout from "../../assets/checkout.svg";
import backSvg from "../../assets/backSvg.svg";
export const OrderPlaced = () => {

  return (
    <Container classes="w-full sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto relative h-screen flex flex-col justify-center items-center">
      <img className="absolute top-10 left-3 lg:hidden" src={backSvg} />
      <h2 className="text-2xl font-semibold text-center ">
        "Congratulations! Your Order Has Been Placed!"
      </h2>
      <img className="max-w-[17rem]" src={checkout} />
      <div className="py-10">
        <h2 className="text-2xl font-semibold text-center hidden lg:block">
          Checkout
        </h2>
        <p className="pt-6 text-brownLight font-normal max-w-[45rem] text-center">
          Brunch: One meal to rule them all! Grab this mega saver combo with
          your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd
          lunchbox and 2 choco lava cakes. This is just bliss on a plate!
        </p>
      </div>
      <Link to="/">
      <Button text="Return Home"  />
      </Link>
    </Container>
  );
};
