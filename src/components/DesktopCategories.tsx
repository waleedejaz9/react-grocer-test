
interface Image {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface CategoryProps {
    image: Image;
    name: string;
}


const DesktopCategories = (props:CategoryProps) =>{
    return (
        <div className="flex  w-44 items-center bg-white border border-2 hover:border-black hover:cursor-pointer rounded-lg p-3">
           <div className="flex justify-center items-center gap-x-4">
           <img src={props.image.src} alt={props.image.alt} className="w-8"/>
            <h1 className="font-semibold" style={{fontSize:"12px", lineHeight:"18px"}}>{props.name}</h1>
           </div>
        </div>
    )
}
export default DesktopCategories