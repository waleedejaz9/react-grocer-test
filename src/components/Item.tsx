import { Link } from 'react-router-dom';
import favouriteIcon from '../assets/favouriteIcon.svg'

interface productType {
    name: string,
    price: number,
    currency: string,
    image: Image
}
interface Image {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}


const Item = (props: productType) => {
    return (
        <Link to="/product">
        <div className="bg-white h-72 w-44 pb-4 rounded-3xl hover:cursor-pointer md:flex md:flex-col" style={{borderRadius:"0px, 0px, 20px, 20px"}}>
           <div className='flex justify-center'>
            <img src={props.image.src} alt={props.image.alt}  />

           </div>
     
            <p className="font-semibold px-3 mt-3" style={{fontSize:"14px", lineHeight:"21px"}}>{props.name}</p>
            <div className="flex justify-between px-3 mt-2  ">
                <p className='font-semibold' style={{fontSize:"14px", lineHeight:"21px"}} >
                   <span className='text-buttonColor'>{props.currency}</span> {props.price}
                </p>
                <img src={favouriteIcon} alt="" className='w-4 hover:cursor-pointer' />
            </div>
                    
        </div>
        </Link>

    )
}
export default Item