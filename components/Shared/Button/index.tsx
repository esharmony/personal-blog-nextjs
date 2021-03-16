export interface ButtonProps {
  text: string;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <span
      title={props.disabled ? 'Disabled' : ''}
      className={`
            ${props.className}
            ${props.selected ? 'text-my-orange' : 'text-gray-300'} 
            ${!props.selected && 'hover:text-gray-50'}
            ${
              props.disabled ? 'bg-gray-600 hover:text-gray-300' : 'bg-gray-800'
            } 
            text-sm 
            py-1 px-2 
            uppercase 
            font-mainFont 
            inline-block`}
    >
      {props.text}
    </span>
  );
};

export default Button;
