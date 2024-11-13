import { tv } from 'tailwind-variants'

interface ButtonProps {
  color: 'primary' | 'secondary'
  text: string
}

const button = tv({
  base: 'text-sm font-medium px-4 py-3 rounded-md cursor-pointer',
  variants: {
    color: {
      primary: 'bg-primary text-white',
      secondary: 'bg-background-primary text-white border border-white'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})
const Button: React.FC<ButtonProps> = ({ color, text }) => {
  return(
    <button className={button({color})}>{text}</button>
  )
}

export default Button
