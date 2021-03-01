export interface ButtonProps {
    text:string;
    selected:boolean;
}

const Button = (props: ButtonProps):JSX.Element => {
    return <span className={`
            ${props.selected ? 'text-my-orange' : 'text-gray-300'} 
            ${!props.selected && 'hover:text-gray-50' } 
            text-sm 
            bg-gray-800 
            py-1 px-2 
            uppercase 
            font-mainFont 
            inline-block`}>
                {props.text}
        </span>
}

export default Button;