import Container from "../../components/Container"; 
import Button from "../../components/Button";
import { checkout } from "../../assets";
export const Checkout = () => {
  return (
    <Container>
      <h2 className="tw-text-2xl tw-font-semibold tw-text-center sm:tw-hidden">
        "Congratulations! Your Order Has Been Placed!"
      </h2>
      <img className="tw-max-w-[17rem]" src={checkout} />
      <div className="tw-py-10">
        <h2 className="tw-text-2xl tw-font-semibold tw-text-center">
          Checkout
        </h2>
        <p className="tw-pt-6 tw-text-paragraph tw-font-normal tw-max-w-[45rem] tw-text-center tw-hidden sm:tw-block">
          Brunch: One meal to rule them all! Grab this mega saver combo with
          your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd
          lunchbox and 2 choco lava cakes. This is just bliss on a plate!
        </p>
      </div>
      <Button text="Return Home" />
        
    </Container>

  );
};
