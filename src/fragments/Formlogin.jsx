import Button from "../Button"
import Inputform from "../Input"
const FormLogin = () => {

    const HandleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        window.location.href = "/"
    }

    return (
        <form onSubmit={HandleLogin}>
            <Inputform
                label=""
                type="email"
                placeholder="Email adress"
                name="email"
            />
            <Inputform
                label=""
                type="password"
                placeholder="Password"
                name="password"
            />
            <Button type="submit">Sign In</Button>

        </form>
    )
}

export default FormLogin