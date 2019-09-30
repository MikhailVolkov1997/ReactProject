    import React from "react";
    import {reduxForm, Field} from 'redux-form'
    import { Input } from "../Component/Textarea";
    import { required, maxLengthActionCreator } from '../../Utills/Validators/Validate';
    import { connect } from "react-redux";
    import { login } from "../../Redux/auth";
    import {Redirect} from 'react-router-dom'

    const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
        if (props.auth) {
            return <Redirect to = '/content' />
        }
    return   <LoginReduxForm onSubmit={onSubmit}/>
    }
      

    let maxLength20 = maxLengthActionCreator(40);

    const LoginForm = (props) => {

        return <form onSubmit={props.handleSubmit}>
                <div>
                <Field  placeholder='UserName' name={'email'} component={Input}  validate = {[required, maxLength20]}/>
                </div>
                <div>
                    <Field  placeholder="Password" name={'password'} component={Input} type='password' validate = {[required, maxLength20]}/>
                </div>
                <div className='formError'>{props.error && <span>{props.error}
                </span>}</div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={'input'} /> Remember me
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
                
            </form>
        
    }
    const LoginReduxForm = reduxForm({form:"login"})(LoginForm);

    const mapStateToProps = (state) => {
        return {
        auth:state.auth.isAuth
        }
    }



    export default connect(mapStateToProps, {login})(Login)