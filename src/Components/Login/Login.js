import React from "react";
import {reduxForm, Field} from 'redux-form'
import { Input } from "../Component/Textarea";
import { required, maxLengthActionCreator } from '../../Utills/Validators/Validate';




const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return   <LoginReduxForm onSubmit={onSubmit}/>
   
}

let maxLength20 = maxLengthActionCreator(20);

 const LoginForm = (props) => {


   
        return <form onSubmit={props.handleSubmit}>
             <div>
                <Field  placeholder='UserName' name={'name'} component={Input}  validate = {[required, maxLength20]}/>
             </div>
             <div>
                 <Field  placeholder="Password" name={'password'} component={Input}  validate = {[required, maxLength20]}/>
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