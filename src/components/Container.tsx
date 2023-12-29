const Container = ({children}: {children:any}) =>{
return (
    <div className="tw-w-10/12 sm:tw-w-9/12 lg:tw-w-auto lg:tw-max-w-[49rem] xl:tw-max-w-[73rem]  tw-mx-auto tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center">
        {children}
    </div>
)
}
export default Container;