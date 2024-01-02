import CampainSlider from "../../components/CampaignSlider";

import wavingHand from "../../assets/wavingHand.svg"
import greenSalad from "../../assets/greenSalad.png"
import steak from "../../assets/steak.png"
import freshVegetable from "../../assets/freshVegetable.png"
import search from "../../assets/search.svg"
import salad from "../../assets/salad.png"
import Item from "../../components/Item";
import home from "../../assets/home.svg"
import heart from "../../assets/heart.svg"
import store from "../../assets/store.svg"
import stocks from "../../assets/stocks.svg"
import profilecircle from "../../assets/profilecircle.svg"
import backerySliced from "../../assets/backerySliced.png"
import birthdayCake from "../../assets/birthdayCake.png"
import frenchMacoroons from "../../assets/frenchMacoroons.png"
import bakeryGluten from "../../assets/bakeryGluten.png"
import vanillaCupCakes from "../../assets/vanillaCupCakes.png"
import redVine from "../../assets/redVine.png"
import DesktopCategories from "../../components/DesktopCategories";
import Wine from "../../assets/wine.png";
import whiskey from "../../assets/whiskey.png"
import floral from "../../assets/Floral.png"
import flower from "../../assets/flower.png"

import forKids from "../../assets/For Kids.png"

import popular from "../../assets/popular.png"

import chamagne from "../../assets/champagne.png"
export const Dashboard = () => {
    return (
        <div className="flex justify-center">
            <div className="">
                <div className="hidden md:block">
                    <div className="flex justify-center">
                        <div className="w-10/12 mt-14">
                            <CampainSlider />

                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-10/12">
                        <div className="flex justify-between mt-14">
                            <div className="">
                                <div className="flex gap-x-3">
                                    <h1 className="text-black font-semibold" style={{ fontSize: "25px", lineHeight: "37.5px" }}>
                                        Hey Danyal
                                    </h1>
                                    <img src={wavingHand} alt="" className="w-7" />
                                </div>
                                <p className="font-normal" style={{ fontSize: "13px", lineHeight: "19.5px" }}>It's dinner time!</p>
                            </div>
                            <img src={search} alt="" className="mb-3 md:hidden block" />
                        </div>
                        <div className="flex justify-between md:hidden block mt-16">
                            <h3 className="text-black font-semibold" style={{ fontSize: "16px", lineHeight: "24px" }}>
                                Categories
                            </h3>
                            <h3 className="text-buttonColor font-semibold" style={{ fontSize: "16px", lineHeight: "24px" }}>
                                See all
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:hidden block">
                    <div className="pl-7">
                        <div className="flex gap-x-5 mt-5 overflow-x-scroll overflow-hidden">
                            <img src={salad} alt="salad" className="hover:cursor-pointer" />
                            <img src={steak} alt="steal" className="hover:cursor-pointer" />
                            <img src={steak} alt="steak" className="hover:cursor-pointer" />

                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">

                    <div className="w-10/12 mt-10 hidden md:block">
                        <div className="flex gap-x-20">
                            <DesktopCategories name="popular" image={{ src: popular, alt: "wine" }} />
                            <DesktopCategories name="wine" image={{ src: Wine, alt: "wine" }} />

                            <DesktopCategories name="chamagne" image={{ src: chamagne, alt: "wine" }} />

                            <DesktopCategories name="Floral" image={{ src: floral, alt: "wine" }} />

                            <DesktopCategories name="Birthday" image={{ src: forKids, alt: "wine" }} />

                            <DesktopCategories name="flower" image={{ src: flower, alt: "wine" }} />

                            <DesktopCategories name="whiskey" image={{ src: whiskey, alt: "wine" }} />

                        </div>


                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-10/12">


                        <div className="flex justify-between mt-6">
                            <h3 className="text-black font-semibold" style={{ fontSize: "16px", lineHeight: "24px" }}>
                                Recommended Items
                            </h3>
                            <h3 className="text-buttonColor font-semibold" style={{ fontSize: "16px", lineHeight: "24px" }}>
                                Filter
                            </h3>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-x-4 md:gap-x-7 md:flex gap-y-9 overflow-y-scroll h-27rem md:scroll-x-overflow 2xl:w-tw lg:w-ll md:w-dd" >
                            <Item
                                name={"Green salad with mashed potatoes"}
                                price={12.22}
                                currency="$"
                                image={{ src: greenSalad, alt: "greenSalad" }}
                            />
                            <Item
                                name={"Fresh vegetable salad"}
                                price={11.22}
                                currency="$"
                                image={{ src: freshVegetable, alt: "greenSalad" }}
                            />

                            <Item
                                name={"SIMPLE JOYS BAKERY Sliced Lemon Cake"}
                                price={7.22}
                                currency="$"
                                image={{ src: backerySliced, alt: "lemon cake" }}
                            />
                            <Item
                                name={"Sprouts French Macaroons"}
                                price={7.99}
                                currency="$"
                                image={{ src: frenchMacoroons, alt: "greenSalad" }}
                            />

                            <Item
                                name={"LUCKY SPOON BAKERY"}
                                price={12.22}
                                currency="$"
                                image={{ src: bakeryGluten, alt: "greenSalad" }}
                            />
                            <Item
                                name={"Birthday Cake"}
                                price={12.22}
                                currency="$"
                                image={{ src: birthdayCake, alt: "greenSalad" }}
                            />
                            <Item
                                name={"Vanilla Cupcake"}
                                price={12.22}
                                currency="$"
                                image={{ src: vanillaCupCakes, alt: "vanillaCupCakes" }}
                            />
                            <Item
                                name={"AVALINE Organic Red Wine"}
                                price={12.22}
                                currency="$"
                                image={{ src: redVine, alt: "redVine" }}
                            />
                            <Item
                                name={"Green salad with mashed potatoes"}
                                price={12.22}
                                currency="$"
                                image={{ src: greenSalad, alt: "greenSalad" }}
                            />
                            <Item
                                name={"Birthday Cake"}
                                price={12.22}
                                currency="$"
                                image={{ src: birthdayCake, alt: "greenSalad" }}
                            />

                        </div>

                        <div className="flex gap-x-11 justify-center mt-4 md:hidden block">
                            <img src={home} alt="home" />
                            <img src={heart} alt="heart" />
                            <img src={store} alt="store" />
                            <img src={stocks} alt="stocks" />
                            <img src={profilecircle} alt="profileCircle" />

                        </div>

                    </div>
                </div>



            </div>

        </div>
    )
}