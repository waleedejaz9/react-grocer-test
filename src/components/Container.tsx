const Container = ({children}: {children:any}) =>{
return (
    <div className="w-full sm:w-9/12 lg:w-auto lg:max-w-[49rem] xl:max-w-[73rem] mx-auto h-screen flex flex-col justify-center items-center">
        {children}
    </div>
)
}
export default Container;