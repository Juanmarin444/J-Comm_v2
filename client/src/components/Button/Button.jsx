import { Link } from 'react-router-dom'

const Button = (props) => {
  return(
    <Link className="font-Roboto text-xl text-center bg-[#cca869] hover:bg-[#111111] w-52 p-4 mx-auto my-10 rounded-lg text-white" onClick={props.click} to={props.path}>
      {props.text}
    </Link>
  )
}

export default Button;
