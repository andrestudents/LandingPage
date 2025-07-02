import AuthLayout from "../layouts/auth";
import FormRegister from "../fragments/Formregrister";

const RegisterPage = () => {
    return (
        <AuthLayout title="REGISTER" type="register">
            <FormRegister></FormRegister>

        </AuthLayout>
    )
}

export default RegisterPage