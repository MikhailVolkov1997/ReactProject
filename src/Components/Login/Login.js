import React from "react";
import {reduxForm, Field} from 'redux-form'




const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return   <LoginReduxForm onSubmit={onSubmit}/>
   
}


 const LoginForm = (props) => {


   
        return <form onSubmit={props.handleSubmit}>
             <div>
                <Field  placeholder='UserName' name={'name'} component={'input'} />
             </div>
             <div>
                 <Field  placeholder="Password" name={'password'} component={'input'} />
             </div>
             <div>
                 <Field type="checkbox" name={'rememberMe'} component={'input'} /> Remember me
             </div>
             <div>
                 <button type="submit">Log in</button>
             </div>
         </form>
        
 }
 const LoginReduxForm = reduxForm({form:"login"})(LoginForm);

 export default Login