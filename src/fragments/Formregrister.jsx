import Inputform from "../Input";

const FormRegister = () => {
    return (
        <form action="">
            <Inputform
                label="Full Name"
                type="text"
                placeholder=""
                name="fullname"

            />
            <Inputform
                label="Email"
                type="email"
                placeholder=""
                name="email"
            />
            <Inputform
                label="Password"
                type="password"
                placeholder="******"
                name="password"
            />
            <Inputform
                label="Confirm Password"
                type="password"
                placeholder="******"
                name="confirmpassword"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mb-2">Register</button>


        </form>
    )
}

export default FormRegister