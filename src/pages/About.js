import "../styles/About.css";
import rightSideImage from "../assets/images/pizza7.jpg";

function About() {
  return (
    <div className="about-page-container">
      <div className="left-side">
        <p>Welcome to Lizzie Pizzas, your go-to destination for delicious
        pizzas delivered straight to your door! We're here to make your pizza
        cravings a reality with our easy online ordering and speedy delivery
        services. At [Pizza Restaurant Name], we're passionate about crafting
        pizzas that are bursting with flavor. Our talented chefs use only the
        finest ingredients to create a tantalizing menu that caters to all
        tastes. From traditional classics to gourmet specialties, we've got
        something for everyone. Ordering your favorite pizza is a breeze on our
        user-friendly website. Simply browse our menu, choose your preferred
        toppings and crust style, and let us know your delivery address. With
        just a few clicks, your pizza will be on its way to being freshly
        prepared. We understand that time is precious, which is why we're
        committed to delivering your pizza quickly and efficiently. Our
        dedicated delivery team works diligently to ensure your order arrives
        promptly, still piping hot and ready to be devoured. We pride ourselves
        on offering a wide range of options to accommodate various dietary
        preferences. Whether you're a vegetarian, vegan, or need a gluten-free
        option, we've got you covered. Just let us know your requirements, and
        we'll ensure your pizza is made just the way you like it. Your
        satisfaction is our utmost priority, and we value your feedback. We
        strive to provide exceptional service and continually improve our
        offerings. If you have any suggestions or comments, please don't
        hesitate to reach out to us. Your input helps us serve you better.
        Indulge in a slice of pizza perfection today. Order online from [Pizza
        Restaurant Name] and get ready to experience a taste sensation like no
        other. Thank you for choosing us—we can't wait to serve you! Sincerely,
        Lizzi Pizzas Team.</p>
      </div>
      <div
        className="right-side"
        style={{ backgroundImage: `url(${rightSideImage})` }}
      ></div>
    </div>
  );
}

export default About;
