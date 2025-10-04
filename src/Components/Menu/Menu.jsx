import React from "react";
import { pizzaData } from "../../../public/data";
import Pizza from "./../Pizza/Pizza";
export default function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2 className="">Our Menu</h2>

        {numPizzas ? (
          <React.Fragment key={numPizzas}>
            <p>
              Authentic Italian pizzas crafted with love. Our pizzas feature
              thin, crispy crusts, premium imported ingredients, and
              time-honored recipes passed down through generations. Experience
              the true taste of Italy with every bite.
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => {
                // console.log(pizza);
                // console.log(pizza.photoName);

                return <Pizza pizzaObj={pizza} key={pizza.id} />;
              })}
            </ul>
          </React.Fragment>
        ) : (
          <p>We're still working on our menu. Please come back later :)</p>
        )}
      </main>
    </>
  );
}
