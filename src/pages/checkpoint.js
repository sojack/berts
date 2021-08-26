import React, { useState } from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

const MenuItem = styled.div`
  display:grid;

  *{
    margin:0;
    color:white;
  }

  grid-template-columns: 6fr 3fr 1fr;
  margin-bottom: 2rem;

  h3{
    align-self:center;
    font-size:1.2rem;
  }
  .price{
    align-self:center;
    font-family: "Proza Libre",sans-serif;
  }

  .description{
    grid-column:1/3;
  }
  .calories{
    align-self:center;
  }
  .addCalories{
    margin-left:2rem;
  }
  .addPrice{
    margin-left:2rem;
    font-family: "Proza Libre",sans-serif;
  }
  .addItem{
    margin-left:2rem;
  }
`;

const MenuContainer = styled.div`
max-width:620px;
background-color:#333;
padding:1rem;
margin: auto;
color:white;
h1{
  font-size:1.8rem;
  margin-top:2.5rem;
  text-align:center;
  color:red;
  text-transform: uppercase;
}
h2{
  font-size:1.4rem;
  text-align:center;
}
.pizzaSection{
  margin:3rem 1rem;
  background-color:white;
  padding:.5rem 1rem;
}
.logo{
    display:block !important;
  width:350px;
  margin:auto;
}

.menuButton{
  background-color: var(--primary-dark);
  color: white;
  display: block;
  position: fixed;
  right: 20px;
  bottom: 20px;
  text-align: center;
  padding: 1em 2em;
  border-radius: 6px;
  z-index: 100;
  cursor: pointer;
}
div.active {
  display: block;
}

div.inactive {
  display: none;
}
.note{
    font-size:.8em;
    line-height:1.2em;
    margin-bottom:2em;
}
`
const FlyingMenuContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100%;
  max-width: 300px;
  padding: 0 8px 10px;
  background-color: #f8f9fa;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  z-index: 200;
  overflow: auto;
  background-color: var(--primary-dark);

  ul {
    width: 100%;
    height: 100%;
    margin-block-start: 0;
    padding: 8px 0 8px;
  }
  li {
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    font-family: var(--titleFont);
    margin-bottom: 8px;
    :hover {
      background-color: var(--grey-dark);
      a {
        color: white;
      }
    }
  }
  a {
    text-decoration: none;
    padding: 23px 0;
    height: 100%;
    color: var(--primary-dark);
  }
  .active {
    display: block;
  }
  
  .inactive {
    display: none;
  }
`;

const CheckpointPage = () => {
    const [menuState, setMenuState] = useState(false);

    function clickHandler() {
      setMenuState(!menuState);
    }
  return (
    <Layout>
      <Seo title="Checkpoint Online Menu" />
      <MenuContainer>
        <StaticImage className="logo" src="../images/logo-checkpoint-white.png" alt="A kitten" />

        <h1 id="fanfair">Fan Fair</h1>
        <MenuItem>
          <h3>SIGNATURE KETTLE CHIPS</h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Chipotle Mayo Dip and Homemade Creamy Onion and Dill Dip</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h3>SWEET POTATO FRIES</h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Chipotle Mayo Dip and Homemade Creamy Onion and Dill Dip</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h3>GOLDEN PALACE EGG ROLLS</h3>
          <p className="calories">230 Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>With Signature Plum Sauce </p>
          </div>
        </MenuItem>
        <MenuItem>
          <h3>BUFFALO BUTTER CHICKEN WINGS </h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>With Blue Cheese Dip </p>
          </div>
        </MenuItem>
        <MenuItem>
          <h3>DEEP FRIED PICKLES </h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Homemade Creamy Onion and Dill Dip </p>
          </div>
        </MenuItem>

        <h1 id="craftburgers">Craft Burgers</h1>
        <p className="note">Option of side: Fries (980 Calories) or Garden Salad (300 Calories), Side Caesar $6 (440 Calories), Side Poutine $7 (670 Calories) </p>
        <MenuItem>
          <h3>CHECK POINT BURGER</h3>
          <p className="calories">1480 Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Fresh grilled Pattie, aged Cheddar, Clipped Greens, Fire Seared Onions, Vine Tomatoes &amp; Drizzled with our signature Chek-sauce</p>
          </div>
        </MenuItem>

        <MenuItem>
          <h3>Bacon Mushroom Burger</h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Fresh grilled Pattie, Crispy Bacon, Sautee Mushroom and Onions, aged Cheddar, Clipped Greens, Vine Tomatoes &amp; Drizzled with our signature Chek-sauce</p>
          </div>
        </MenuItem>

        <MenuItem>
          <h3>CANDIED BACON GRILLED CHEESE</h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Includes orange and aged white cheddar cheese, candied bacon on toasted Texas white bread</p>
          </div>
        </MenuItem>

        <MenuItem>
          <h3>CHECK POINT CLUB SANDWICH</h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Seasoned Grilled Chicken Breast, Candied Bacon, Clipped Greens, Vine Tomatoes &amp; Chipotle Mayo</p>
          </div>
        </MenuItem>

        <MenuItem>
          <h3>BEYOND BEEF VEGGIE BURGER</h3>
          <p className="calories">1630 Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Plant based vegetable burger, fresh Guacamole, Clipped Greens, Red Onion &amp; Tomato Relish</p>
          </div>
        </MenuItem>

        <h1 id="checkfave">Check Favorites</h1>

        <MenuItem>
          <h3>SIGNATURE PUB STYLE FISH AND CHIPS</h3>
          <p className="calories">1320 Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Battered Haddock Loin, Tartar Sauce, Lemon, with Fresh Cut Fries</p>
          </div>
        </MenuItem>

        <MenuItem>
          <h3>BUDDHA BOWL</h3>
          <p className="calories">XX Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Grilled Tofu, Roasted Cauliflower, Peppers, Red Onion, Arugula served on Brown Rice Yellow Lentils with a Roasted Sesame Seed Dressing and Drizzled with a Siracha Mayo </p>
            <p className="addItem">Add Grilled Chicken <span className="addCalories">280 Calories</span><span className="addPrice">6.50</span></p>
          </div>
        </MenuItem>

        <h1 id="littlesens">Little Sens Fan</h1>

        <MenuItem>
          <h3>Cheddar Cheese Dog </h3>
          <p className="calories">1070 Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Served with Fresh cut Fries </p>
          </div>
        </MenuItem>

        <MenuItem>
          <h3>PINTYS CHICKEN TENDERS </h3>
          <p className="calories">1110 Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Plum Sauce Fresh Cut Fries</p>
          </div>
        </MenuItem>
        <h1 id="sweets">Sweets</h1>

        <MenuItem>
          <h3>Dessert Poutine</h3>
          <p className="calories">480 Calories</p>  
          <p className="price">99</p>
          <div className="description">
            <p>Funnel Cake Fries, Vanilla Bean Ice Cream, Salted Caramel Drizzle</p>
          </div>
        </MenuItem>

        <div onClick={clickHandler} onKeyDown={clickHandler} className="menuButton">Menu</div>

        <FlyingMenuContainer className={menuState ? "active" : "inactive"}>
          <ul>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#fanfair"
              >
                Fan Fair
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#craftburgers"
              >
                Craft Burgers
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#checkfave"
              >
                Check Favorites
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#littlesens"
              >
                Little Sens Fan
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#sweets"
              >
                Sweets
              </a>
            </li>
        
          </ul>
        </FlyingMenuContainer>

    </MenuContainer>
    </Layout>
  );
};

export default CheckpointPage;
