import Category from "../Category/Category";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Process from "../Process/Process";
import Products from "../Products/Products";
import Testimonial from "../Testimonial/Testimonial";
import Values from "../Values/Values";



function Home() {
    return (
        <div>
            <div id="home">
                <Hero />
            </div>
            
            <div id="categories">
                <Category />
            </div>
            
            <Values />
            <div id="products">
                <Products />
            </div>
            
            <Discount />
            <div id="process">
                <Process />
            </div>
            
            <Testimonial />
        </div>
    )
}
export default Home;