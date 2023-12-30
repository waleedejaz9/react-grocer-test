import Container from "../../components/Container";
import Hero from "../../components/Hero";

export const Checkout = () => {
  return (
    <>
      <div className=" md:bg-white md:h-5/12 mt-54 pb-1">
        <div className="w-full sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto">
          <Hero text={"Checkout"} />
        </div>
      </div>
      <Container classes="w-full sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto h-screen ">
        "ok"
      </Container>
    </>
  );
};
