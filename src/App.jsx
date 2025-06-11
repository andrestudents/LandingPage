import Asu from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import FeatureSection from "./component/Feature.jsx";
import Template from "./component/Template.jsx";
const App = () => {
    return (
        <>
            <Asu />

            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Hero />
                <Template />
                <FeatureSection />

            </div>
        </>
    );
}

export default App;
