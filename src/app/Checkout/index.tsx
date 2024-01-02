import Container from "../../components/Container";
import Hero from "../../components/Hero";
import debit from "../../assets/debit.svg";
import payoneer from "../../assets/payoneer.svg";
import paypal from "../../assets/paypal.svg";
import PriceSection from "../../components/PriceSection";
import { useState } from "react";

const data = [
  { img: debit, text: "Debit/Credit card" },
  { img: paypal, text: "PayPal" },
  { img: payoneer, text: "Payoneer" },
];

export const Checkout = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleRadioChange = (index: number) => {
    setSelectedItem(index);
  };
  return (
    <div className=" h-full">
      <div className=" md:bg-white md:h-5/12 mt-54 pb-1">
        <div className="w-11/12 sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto">
          <Hero text={"Checkout"} />
        </div>
      </div>
      <Container classes="w-11/12 sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto mt-2 lg:mt-16">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-20">
          <div className="flex flex-col w-full lg:w-6/12">
            <h2 className="font-semibold font-Poppins text-2xl lg:text-base text-black mt-3 mb-5">
              Payment
            </h2>
            <div className="bg-white rounded-xl py-1 lg:py-2 px-6">
              {data.map((item, index, array) => {
                const isLastItem = index === array.length - 1;

                return (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-3 lg:py-4 ${
                      isLastItem ? "" : "border-b border-b-blackLight"
                    }`}
                    onClick={() => handleRadioChange(index)}
                  >
                    <div className="flex items-center gap-3">
                      <img className=" w-10" src={item.img} alt="logo" />
                      <h4 className="text-black font-Poppins font-medium text-sm lg:text-base">
                        {item.text}
                      </h4>
                    </div>
                    <input
                      type="radio"
                      className={`input-radio ${
                        selectedItem === index ? "on" : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
            <div>
              <h2 className="font-semibold font-Poppins text-2xl lg:text-base  text-black my-6 lg:mt-6 mb-3">
                Delivery details
              </h2>
              <p className="font-Poppins text-base text text-brownLight leading-7 font-normal max-w-[15rem]">
                789 Maple Street, Los Angeles, CA 90001 <br /> (888) 987-6543
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-6/12">
            <div>
              <h2 className="font-semibold font-Poppins text-2xl lg:text-base text-black mt-6 mb-2 lg:mt-6 lg:mb-3">
                Order details
              </h2>
              <ul className="flex flex-wrap">
                {[
                  "1x Green salad",
                  "3x Grilled steak",
                  "1x fresh vegetable",
                  "1x vegan cake",
                  "1x Mixed salad",
                ].map((item) => {
                  return (
                    <li className="font-Poppins font-normal text-sm lg:text-base pt-0.5 text-brownLight w-6/12">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-5 lg:pt-8 ">
              <PriceSection price={133.03} buttonText="Pay Now" totalText />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
