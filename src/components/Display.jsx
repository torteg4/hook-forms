
const Display = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props;

    return (
        <div>
            <h1>Your Form Data</h1>
            <h3>First Name:</h3> <p>{firstName}</p>
            <h3>Last Name:</h3> <p>{lastName}</p>
            <h3>Email:</h3> <p>{email}</p>
            <h3>Password:</h3> <p>{password}</p>
            <h3>Confirm Password:</h3> <p>{confirmPassword}</p>
        </div>
    )
}

export default Display;