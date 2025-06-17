import { Link } from "react-router-dom"
const AuthLayout = (props) => {
    const { children, title, type } = props
    return (
        <div className="flex justify-center  min-h-screen items-center">

            <div className="w-full  max-w-xs">

                <h1 className="text-3xl font-bold mb-2 text-black-600 display flex justify-center">{title}</h1>
                <p className="font-medium text-slate-600 mb-4">
                    Welcome, Please enter your details</p>

                {children}

                {type === "login" ? "Belum punya account?" : "Sudah punya account?"}
                {type === "login" && (<Link to="/register" className="text-blue-500">REGISTER</Link>)}
                {type === "register" && (<Link to="/login" className="text-blue-500">LOGIN</Link>)}

            </div>

        </div>

    )
}

export default AuthLayout