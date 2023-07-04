import Menucard from "../components/Menucard";
import { foodInfo } from "../database/database";
import '../styles/Menu.css'

function Menu() {
  return (
    <div>
    <h2 className="menu-title">Menu</h2>
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
