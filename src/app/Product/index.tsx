import backSvg from "../../assets/backSvg.svg";
import like from "../../assets/like.svg";
import star from "../../assets/star.svg";
import add from "../../assets/add.svg";
import minus from "../../assets/minus.svg";
import productImg from "../../assets/productImg.png";
import product2 from "../../assets/prouct2.png";
import PriceSection from "../../components/PriceSection";

export const Product = () => {
  return (
    <div>
      <div className="lg:bg-white">
        <div className="h-screen flex bg-transparent  justify-between lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto pt-0 lg:pt-14">
          <div className="w-full lg:w-[35%] ">
            <div className="bg-white rounded-b-[40px]">
              <div>
                <div className="flex justify-between pt-10 pb-6 lg:hidden w-11/12  lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto">
                  <img className="cursor-pointer" src={backSvg} alt="backSvg" />
                  <img className="w-6 cursor-pointer" src={like} alt="like" />
                </div>
                <div className=" lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] ml-6 ">
                  <h3 className="font-Poppins text-xl lg:text-3xl font-semibold pt-4 flex gap-2 w-9/12 lg:w-auto">
                    Grilled Beef Steak with Mushroom sauce
                    <img
                      className="w-6 hidden lg:block cursor-pointer"
                      src={like}
                      alt="like"
                    />
                  </h3>
                  <p className="text-brownLight font-normal font-Poppins pt-1">
                    By Steak house
                  </p>
                  <div className="flex">
                    <div className="flex flex-col justify-between w-[15%]">
                      <div className="flex gap-1.5 items-center pt-2">
                        <img src={star} alt="rating" />
                        <p className="font-Poppins font-normal text-black">
                          4.5
                        </p>
                      </div>
                      <div className="flex items-center flex-col lg:flex-row w-fit gap-0 lg:gap-4 m-0 lg:my-10 ml-3">
                        <img
                          className="w-12 mb-1.5 lg:mb-0 cursor-pointer"
                          src={add}
                          alt="add"
                        />
                        <p className="text-3xl text-black font-Inter">1</p>
                        <img
                          className="w-12 mt-1.5 lg:mt-0 cursor-pointer"
                          src={minus}
                          alt="minus"
                        />
                      </div>
                      <div></div>
                    </div>
                    <img
                      className="block lg:hidden  w-[85%]"
                      src={productImg}
                      alt="product"
                    />
                  </div>
                  <h3 className="text-black text-lg font-Poppins font-semibold">
                    Description
                  </h3>
                  <p className="text-sm font-Poppins font-normal text-brownLight pt-1 pb-4 leading-6 w-10/12 lg:w-auto">
                    Indulge in the mouthwatering delight of a perfectly grilled
                    beef steak generously topped with a rich and savory mushroom
                    sauce.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 lg:pt-8 w-11/12 mx-auto">
              <PriceSection
                price={25.27}
                buttonText="Add to cart"
                totalText={false}
                
              />
            </div>
          </div>
          <div className="hidden lg:block w-[30%]">
            <img src={product2} alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
};
