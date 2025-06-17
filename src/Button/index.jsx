const Button = (props) => {
    const { type = "button", onClick = () => { } } = props
    return (
        <button
            className={`w-full bg-green-600 text-white py-2 rounded-md mb-2`}
            type={type}
            onClick={onClick}
        > {props.children}
        </button>
    )
}

export default Button