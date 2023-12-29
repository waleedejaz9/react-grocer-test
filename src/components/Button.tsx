interface buttonProps {
    text: string
}
const Button = (props: buttonProps) => {
    return (
        <div>
            <button className="tw-px-4 tw-py-2 tw-bg-[#EA5323] tw-rounded-3xl tw-text-white tw-text-sm tw-font-medium">
                {props.text}
            </button>
        </div>
    )
}
export default Button