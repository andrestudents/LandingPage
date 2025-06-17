import AuthLayout from "../layouts/auth";
import FormLogin from "../fragments/Formlogin";

const LoginPage = () => {
    return (
        <AuthLayout title="LOGIN" type="login">
            <FormLogin />
        </AuthLayout>

    )
}

export default LoginPage