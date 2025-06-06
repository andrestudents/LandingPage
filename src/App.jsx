import Asu from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
const App = () => {
    return (
        <>
            <Asu />

            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Hero />
            </div>
        </>
    );
}

export default App;
