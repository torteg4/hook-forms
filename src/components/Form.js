import { useState } from 'react';
import Display from './Display';

const Form = (props) => {
    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [firstNameError, setFirstNameError] =useState("");
    const [lastNameError, setLastNameError] =useState("");
    const [emailError, setEmailError] =useState("");
    const [passwordError, setPasswordError] =useState("");
    const [confirmPasswordError, setConfirmPasswordError] =useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // let errors = 0;

        if (formData.firstName.length <= 2) {
            setFirstNameError("First name must be at least 2 characters");
            // errors++;
        } else {
            setFirstNameError("");
        }

        if (formData.lastName.length <= 2) {
            setLastNameError("Last name must be at least 2 characters");
            // errors++;
        }else {
            setLastNameError("");
        }
        
        if (formData.email.length <= 5) {
            setEmailError("Field must be at least 5 characters");
            // errors++;
        }else {
            setEmailError("");
        }

        if (formData.password.length <= 8) {
            setPasswordError("Field must be at least be 8 characters");
            // errors++;
        }else {
            setPasswordError("");
        }

        if (formData.confirmPassword !== formData.password) {
            setConfirmPasswordError("Passwords must match");
            // errors++;
        }else {
            setConfirmPasswordError("");
        }

        // if (errors < 1) {
        //     setFormData(initialFormData);
        //     setFirstNameError("");
        //     setLastNameError("");
        //     setEmailError("");
        // }
    };

    const onChangeHandler = (e) => {
        // the name part of e.target.name refers to the input name attribute, not what's submitted within the attribute (i.e. firstName, etc)
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    return (
        <>
            <form onSubmit = {onSubmitHandler}>
                <div class="mb-3">
                    <label class="form-label">First Name</label>
                    <input 
                        name = "firstName"
                        type="text" 
                        class="form-control"
                        onChange = {onChangeHandler}
                    />
                    { firstNameError.length >= 2 ? firstNameError : "" }
                </div>

                <div class="mb-3">
                    <label class="form-label">Last Name</label>
                    <input 
                        name = "lastName"
                        type="text" 
                        class="form-control"
                        onChange = {onChangeHandler}
                    />
                    { lastNameError.length >= 2 ? lastNameError : "" }
                </div>

                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input 
                        name = "email"
                        type="text" 
                        class="form-control" 
                        onChange = {onChangeHandler}
                    />
                    { emailError.length >= 5 ? emailError : "" }
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input 
                        name = "password"
                        type="password" 
                        class="form-control" 
                        onChange = {onChangeHandler}
                    />
                    { passwordError.length >= 8 ? passwordError : "" }
                </div>

                <div class="mb-3">
                    <label class="form-label">Confirm Password</label>
                    <input 
                        name = "confirmPassword"  
                        type="password" 
                        class="form-control" 
                        onChange = {onChangeHandler}
                    />
                    {confirmPasswordError !== passwordError ? confirmPasswordError: "" }
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <Display 
                firstName={formData.firstName} 
                lastName={formData.lastName} 
                email={formData.email} 
                password={formData.password} 
                confirmPassword={formData.confirmPassword}
            />
        </>
    )
};

export default Form;
