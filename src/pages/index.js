import React, { useState } from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

const MenuItem = styled.div`
  display:grid;

  *{
    margin:0;
  }

  grid-template-columns: 6fr 3fr 1fr;
  margin-bottom: 1rem;

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
background-color:#EEE;
padding:1rem;
margin: auto;
h1{
  color: var(--red);
  font-size:1.8rem;
  margin-top:2.5rem;
  text-align:center;
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
  width:350px;
  display:block;
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

const IndexPage = () => {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }


  return (
    <Layout>
      <Seo title="Home" />
      <MenuContainer>
        <StaticImage className="logo" src="../images/logo-berts.png" alt="A kitten" />
        <h1 id="sharables">SHAREABLES</h1>

        <MenuItem>
          <h3>Chicken Fingers</h3>
          <p className="calories">1480 Calories</p>  
          <p className="price">19</p>
          <div className="description">
            <p>Crispy Chicken Fingers served with Fries and Plum Sauce </p>
          </div>
        </MenuItem>

        <MenuItem>
          <h3>Chicken Wings</h3>
          <p  className="calories">1270 Calories</p>  
          <p className="price">20</p>
          <div className="description">
            <p>BBQ, Medium, Hot, Honey Garlic or Honey Hot<br />
          Pound of Chicken Wings tossed in your favorite sauce served with a side Ranch and Carrot &amp; Celery Stix </p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>No Naked Nacho</h3>
          <p  className="calories">1760 Calories</p>  
          <p className="price">17</p>
          <div className="description">
            <p>Single Portion of corn chips baked with Cheddar Cheese, Jalapeno Cheese Sauce, Pico (Bruschetta Mix) and Sweet Chipotle Drizzle and Fresh Crema</p>
            <p>*Serves 2 People* </p>
            <p className="addItem">Add Grilled Chicken <span className="addCalories">280 Calories</span> <span className="addPrice">6.50</span> </p>
            <p className="addItem">Add Seasoned Ground Beef <span className="addCalories">XXX Calories</span> <span className="addPrice">5.00</span></p>
            <p className="addItem">Add Maple Candy Bacon <span className="addCalories">XXX Calories</span> <span className="addPrice">5.00</span></p>
          </div>
        </MenuItem> 
        <div className="pizzaSection">
          <h1 id="pizza">STONE FIRED PIZZA</h1>
          <p>All our pizzas are Hand Stretched, using Caputo Flour for our dough, giving you the perfect Blistered Crust</p>
          <p>*Option to add Basil Pesto as replacement for Crushed Raw Tomato Sauce*</p>

          <MenuItem>
            <h3>Pepperoni </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">15</p>
            <div className="description">
              <p>Crushed Raw Tomato Sauce, Pepperoni, Mozzarella and Basil</p>
            </div>
          </MenuItem> 
          <MenuItem>
            <h3>Cheese </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">12</p>
            <div className="description">
              <p>Crushed Raw tomato Sauce, Grated Mozzarella</p>
            </div>
          </MenuItem> 
          <MenuItem>
            <h3>Chefs Special </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">21</p>
            <div className="Chef choice Pizza of the Night">
              <p>BBQ</p>
            </div>
          </MenuItem> 
          <MenuItem>
            <h3>Meat Lovers </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">18</p>
            <div className="description">
              <p>Crushed Raw Tomato Sauce, Pepperoni, Italian Sausage, Mozzarella Cheese</p>
            </div>
          </MenuItem> 
          <MenuItem>
            <h3>Chicken Bruschetta </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">21</p>
            <div className="description">
              <p>Garlic Oil, Bruschetta Blend, diced Grilled Chicken, and Mozzarella Cheese</p>
            </div>
          </MenuItem> 
          <h2>White Pizzas</h2>
          <MenuItem>
            <h3>Fungi </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">18</p>
            <div className="description">
              <p>Garlic Roasted Mushrooms, Alfredo Drizzle, Ricotta Dollop</p>
            </div>
          </MenuItem> 
          <MenuItem>
            <h3>Bianca </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">19</p>
            <div className="description">
              <p>Truffle Oil, Italian Sausage, Mozzarella Cheese, Basil, and Ricotta Dollop</p>
            </div>
          </MenuItem> 
          <MenuItem>
            <h3>Salmone </h3>
            <p  className="calories">XXX Calories</p>  
            <p className="price">19</p>
            <div className="description">
              <p>Alfredo Drizzle, Sliced Smoked Salmon, Arugula, Ricotta Dollop</p>
            </div>
          </MenuItem> 
        </div>

        <h1 id="berts">BERT’S FAVORITES</h1>
        <p>Sandwiches &amp; Wraps Served with option of side: Fries (980 Calories) or Garden Salad (XXX Calories), Side Caesar $6 (440 Calories), Side Poutine $7 (670 Calories)</p>
        <MenuItem>
          <h3>Bert’s Signature Burger </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">21</p>
          <div className="description">
            <p>6oz Sirloin Burger served with Cheddar Cheese, Crisp Romain Lettuce, Vine Ripe Tomato and Red Onion on a Brioche Bun with a side Pickle Spear</p>
          </div>
        </MenuItem> 
        
        <MenuItem>
          <h3>Bert’s Loaded Burger </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">25</p>
          <div className="description">
            <p>6oz Sirloin Burger served with Swiss Cheese, Sauteed Mushroom, Crispy Candy Bacon, Crisp Romain Lettuce, Vine Ripe Tomato and Red Onion with a BBQ Aioli on a Brioche Bun and a Side Pickle Spear</p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>Ruben </h3>
          <p  className="calories">1650 Calories</p>  
          <p className="price">20</p>
          <div className="description">
            <p>Smoked Meat, Candy Bacon Sour Kraut, Thousand Islands Dressing and Swiss Cheese Served on Soft Ryebread</p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>Chicken Candy Bacon Club </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">23</p>
          <div className="description">
            <p>Grilled Chicken Breast, Thin Sliced Tomato, with Peppercorn Mayo served on 6x4 Ciabatta Bun</p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>Caesar Wrap </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">23</p>
          <div className="description">
            <p>Crisp Romaine Lettuce, Fresh Parmesan Cheese, Candy Bacon and Caesar Dressing Seared to finish in a Tomato basil Wrap</p>
            <p className="addItem">ADD Crispy Chicken <span className="addCalories">XXX Calories</span><span className="addPrice">5</span></p>
            <p className="addItem">ADD Grilled Chicken <span className="addCalories">280 Calories</span><span className="addPrice">6.50</span></p>
            <p className="addItem">ADD Crispy Cauliflower Bites <span className="addCalories">XXX Calories</span><span className="addPrice">5</span></p>
            <p>* Have it tossed in Buffalo sauce for a spicy kick *</p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>Grilled Marinated Vegetable Wrap </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">19</p>
          <div className="description">
            <p>Grilled Seasoned Vegetables in a Light Balsamic Marinade with Fetta Cheese, Bruschetta Mix and Guacamole wrapped in a Tomato basil Wrap</p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>Grilled Chicken &amp; Mango Salad </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">19</p>
          <div className="description">
            <p>Crisp Greens, Sliced Mango, Avocado, with Poppy Seed Vinaigrette</p>
          </div>
        </MenuItem> 
 
        <MenuItem>
          <h3>Traditional Caesar Salad </h3>
          <p  className="calories">710 Calories</p>  
          <p className="price">16.50</p>
          <div className="description">
            <p>Crisp Romaine Lettuce, Fresh Parmesan Cheese, Candy Bacon, Seasoned Croutons and Caesar Dressing</p>
            <p className="addItem">ADD Grilled Chicken <span className="addCalories">280 Calories</span><span className="addPrice">6.50</span></p>
          </div>
        </MenuItem> 

        <h1 id="sparkys">SPARTY’S KIDS CORNER</h1>

        <MenuItem>
          <h3>Kids Chicken Fingers </h3>
          <p  className="calories">1110 Calories</p>  
          <p className="price">13</p>
          <div className="description">
            <p>3 Crispy Chicken Fingers Served with Plum Sauce</p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>JR Sens Burger </h3>
          <p  className="calories">507 Calories</p>  
          <p className="price">13</p>
          <div className="description">
            <p>Served with Fries</p>
            <p className="addItem">Extra Toppings<span className="addPrice">3</span></p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>Kids Cheese Pizza </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">13</p>
        </MenuItem> 

        <h1 id="sweets">SWEETS</h1>

        <MenuItem>
          <h3>[ITEM TO COME] </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">XX</p>
          <div className="description">
            <p>[Description to come]</p>
          </div>
        </MenuItem> 

        <MenuItem>
          <h3>[ITEM TO COME] </h3>
          <p  className="calories">XXX Calories</p>  
          <p className="price">XX</p>
          <div className="description">
            <p>[Description to come]</p>
          </div>
        </MenuItem> 
        <div onClick={clickHandler} onKeyDown={clickHandler} className="menuButton">Menu</div>

        <FlyingMenuContainer className={menuState ? "active" : "inactive"}>
          <ul>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#sharables"
              >
                Sharables
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#pizza"
              >
                Pizza
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#berts"
              >
                Bert's Favourites
              </a>
            </li>
            <li>
              <a
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#sparkys"
              >
                Sparkys
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

export default IndexPage;
