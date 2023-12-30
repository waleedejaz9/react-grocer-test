// import Container from "../../components/Container";
import Hero from "../../components/Hero";
import PriceSection from "../../components/PriceSection";
import Products from "../../components/Products.tsx";
import greenSalad from "../../assets/greenSalad.png"
import steak from "../../assets/steak.png"
import mixedSalad from "../../assets/mixedSalad.png"
import cake from "../../assets/cake.png"
import FreshVegetable from "../../assets/FreshVegetable.png"


export const MyBucket = () => {
  const productsList = [
    {
      image: {
        src: greenSalad,
        alt: "Green Salad with mashed potatoes",
      },
      name: "Green Salad with mashed potatoes",
      quantity: 2,
      price: 24.44
    },
    {
      image: {
        src: FreshVegetable,
        alt: "Fresh vegetable salad",
      },
      name: "Fresh vegetable salad",
      quantity: 1,
      price: 11.22
    },
    {
      image: {
        src: mixedSalad,
        alt: "Green Salad with mashed potatoes",
      },
      name: "Mixed salad with strawberries and watermelon",
      quantity: 1,
      price: 12.44
    },
    {
      image: {
        src: steak,
        alt: "Green Salad with mashed potatoes and watermelon",
      },
      name: "grilled beef steak with mushroom sauce",
      quantity: 3,
      price: 75.81
    },
    {
      image: {
        src: cake,
        alt: "Green Salad with mashed potatoes",
      },
      name: "Vegan strawberry cake",
      quantity: 1,
      price: 10.12
    },
    {
      image: {
        src: cake,
        alt: "Green Salad with mashed potatoes",
      },
      name: "Vegan strawberry cake",
      quantity: 1,
      price: 10.12
    },
    {
      image: {
        src: cake,
        alt: "Green Salad with mashed potatoes",
      },
      name: "Vegan strawberry cake",
      quantity: 1,
      price: 10.12
    },
  ]

  return (
    <div>
      <div className="flex justify-center md:bg-white md:h-5/12 mt-54">
    <div className="w-10/12 xl:w-9/12">
      <Hero text={"My Bucket"} />

    </div>
      </div>
      <div className="flex justify-center">

        <div className="" style={{ "width": "88%" }}>

          <div className="" style={{ marginTop: "30px" }}>
            <Products productsArray={productsList} />
            <div className="mt-14 md:mt-10 flex justify-center md:justify-end md:mr-20">
              <PriceSection price={233.03} buttonText="Checkout" />
            </div>

          </div>
        </div>
      </div>
    </div>


  );
};
