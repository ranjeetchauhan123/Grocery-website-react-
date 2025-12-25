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
            <Hero />
            <Category />
            <Values />
            <Products />
            <Discount />
            <Process />
            <Testimonial />
        </div>
    )
}
export default Home;