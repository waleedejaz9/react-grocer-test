
interface Image {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface ProductDetails {
    image: Image;
    name: string;
    quantity: number;
    price: number;
}

interface ProductsProps {
    productsArray: ProductDetails[];
}

const Products = (props: ProductsProps) => {
    return (
        <div className="container mx-auto">
              <div className="overflow-y-scroll  overflow-hidden h-670px md:h-400px" >
            {props.productsArray.map((product, index) => {
                return (
                    <div key={index} className="flex gap-x-5 bg-white w-84 md:w-full h-28 mt-5" style={{ borderRadius: "20px", boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05);" }}>
                        <div className="p-2 flex items-center">
                            <img
                                src={product.image.src}
                                alt={product.image.alt}
                                width={91}
                                height={91}
                            />
                        </div>
                        <div className="flex flex-col justify-between mb-3 w-full md:w-11/12">
                            <h3 className="mt-4 text-black text-sm font-semibold leading-normal font-normal w-56 md:w-full">
                                {product.name}
                            </h3>
                            <div className="flex justify-between items-end mr-6">
                                <p className="" style={{ fontSize: "14px", color: "#A1A1A1", fontWeight: 400 }}>Quantity: {product.quantity}</p>
                                <p className="font-semibold md:flex md:items-center md:text-lg" > <span className="text-buttonColor">$ </span>{product.price}</p>

                            </div>
                        </div>
                   
                    </div>
                )
            })}
        </div>
        </div>
      
    );
};

export default Products;
