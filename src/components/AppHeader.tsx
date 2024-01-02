import location from '../assets/location.svg'
import logo from "../assets/logo.svg"
import heartIcon from "../assets/heartIcon.svg";
import cart from "../assets/cart.svg"
import SearchDropdown from "./SearchComponent";

export const AppHeader = ({cartQuantity}:{cartQuantity:number}) => {
  return (
    <div className="hidden md:block">
      <div className="bg-white flex justify-center border-b-2 border-grey-500 my-0.5 ">
        <div className="w-10/12 px-8">
          <div className="bg-white h-16  flex justify-between p-3">
            <div>
              <img className="rounded-full w-10 hover:curor-pointer" src={logo} alt="" />
            </div>
            <div className="flex relative">
              <SearchDropdown />              
            </div>
            <div className="flex gap-x-2">
              <img src={location} alt="locationIcon" className="w-6 p-0.5 hover:cursor-pointer" />
              <div>
                <h5 className="font-semibold text-sm " >
                  Wapda town
                </h5>
                <p className="text-xs text-buttonColor hover:cursor-pointer">
                  Change
                </p>
              </div>
              <div className="flex items-center hover:text-red-900 hover:cursor-pointer">
                <img src={heartIcon} alt="" className="w-6 p-0.5 " />
              </div>
              <button className="bg-buttonColor px-5 py-2 rounded-full text-white">
                Login
              </button>
              <button className="px-5 py-2 bg-gray-300 rounded-full flex gap-x-2 border-buttonColor">
                <img src={cart} alt="" className="" />
                <p className="text-buttonColor2">{typeof(cartQuantity)==="number" ? cartQuantity: 0 }</p>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
};
