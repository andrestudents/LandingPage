import Asu from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import FeatureSection from "./component/Feature.jsx";
import Template from "./component/Template.jsx";
import Pricing from "./component/Pricing.jsx";
import Footer from "./component/Footer.jsx";
const App = () => {
    return (
        <>
            <Asu />

            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Hero />
                <FeatureSection />
                <Template />
                <Pricing />
                <Footer />
            </div>
        </>
    );
}

export default App;
