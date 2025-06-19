import { Link } from "react-router-dom"
const AuthLayout = (props) => {
    const { children, title, type } = props
    return (
        <div className="flex justify-center  min-h-screen items-center">

            <div className="w-full  max-w-xs bg-white rounded p-8">

                <h1 className="text-3xl font-bold mb-2 text-black display flex justify-center">{title}</h1>
                <p className="font-medium text-slate-600 mb-4">
                    Welcome, Please enter your details</p>

                {children}

                <span className="text-sm text-slate-600"> {type === "login" ? "Don't have account?" : "Have account?"} </span>

                {type === "login" && (<Link to="/register" className="text-blue-500">REGISTER</Link>)}
                {type === "register" && (<Link to="/login" className="text-blue-500">LOGIN</Link>)}

            </div>

        </div>

    )
}

export default AuthLayout