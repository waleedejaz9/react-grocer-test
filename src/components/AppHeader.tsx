import steak from "../assets/steak.png"
import Button from "./Button";
export const AppHeader = () => {
  return (<div className="bg-white h-14 border-b-2 border-grey-500 my-0.5 flex justify-between p-3">
    <div>
    <img className="rounded-full w-10" src={steak} alt="" />
  </div>
  <div>
    <input type="text" />
  </div>
  <div className="flex">
    <div>
      Wapda town
    </div>
    <div>
      <img src={steak} alt="" />
    </div>
    <div>
      <Button text="Log in"/>
    </div>
    <div>
      button with cart
    </div>
  </div>
  </div>);
};
