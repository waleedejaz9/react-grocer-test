import Container from "../../components/Container";
import Button from "../../components/Button";
import checkout from "../../assets/checkout.svg";
export const OrderPlaced = () => {
  return (
    <Container classes="w-full sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold text-center sm:hidden">
        "Congratulations! Your Order Has Been Placed!"
      </h2>
      <img className="max-w-[17rem]" src={checkout} />
      <div className="py-10">
        <h2 className="text-2xl font-semibold text-center">Checkout</h2>
        <p className="pt-6 text-paragraph font-normal max-w-[45rem] text-center hidden sm:block">
          Brunch: One meal to rule them all! Grab this mega saver combo with
          your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd
          lunchbox and 2 choco lava cakes. This is just bliss on a plate!
        </p>
      </div>
      <Button text="Return Home" />
    </Container>
  );
};
