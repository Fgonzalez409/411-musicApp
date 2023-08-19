import Form from "../Components/Form"

const Login = (props) => {
  return (
    <div> 
       <Form setIsLoggedIn={props.setIsLoggedIn}/> 
    </div>
   
  )
}

export default Login