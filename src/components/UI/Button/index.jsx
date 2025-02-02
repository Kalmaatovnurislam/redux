import './index.css'

const Button = (props) => {
    const{children ,onClick} = props
  return (
      <button onClick={onClick} >
        {children}
        </button>
  )
}

export default Button