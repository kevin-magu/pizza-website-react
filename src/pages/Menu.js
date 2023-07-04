import Menucard from "../components/Menucard";
import { foodInfo } from "../database/database";
import '../styles/Menu.css'

function Menu() {
  return (
    <div className="menu-page-container">
    <h2 className="menu-title">Menu</h2>
    <p type='submit'>ORDER</p>
    <div className="div-card-container">
        {foodInfo.map((menuItem, key) => {
          return (
            <div className="div-card-container">
            <Menucard
              key={key}
              image={menuItem.photo}
              name={menuItem.name}
              price={menuItem.price}
            />
            
            </div>
          );
        })}
      
    </div>
    </div>
  );
}

export default Menu;
