import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./Li";

function Money() {
  let things = [
    {
      img: "https://www.alimentarium.org/sites/default/files/media/image/2017-02/AL027-01_pomme_de_terre_0_0.jpg",
      nameOf: "Potato",
      price: "1",
    },
    {
      img: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1-1024x682.jpg",
      nameOf: "Carrot",
      price: "1.5",
    },
    {
      img: "https://www.heddensofwoodtown.co.uk/wp-content/uploads/2020/05/tomatoes_opt.jpg",
      nameOf: "Tomato",
      price: "2",
    },
    {},
  ];
  let [number, setNumber] = useState(9999999999);
  let [boughtThing, setBought] = useState(0);
  let [purchasedMoney, setMoney] = useState(0);
  function buyPotato() {
    purchasedMoney += 1;
    boughtThing += 1;
    number -= 1;
    let bought = document.getElementById("bought");
    let money = document.getElementById("money");
    let purchased = document.getElementById("purchased");
    purchased.textContent = `You purchased: ${purchasedMoney}$`;
    bought.textContent = `You bought: ${boughtThing} products`;
    money.textContent = `You have ${number}$ `;
  }
  function buyCarrot() {
    purchasedMoney += 1.5;
    let purchased = document.getElementById("purchased");
    purchased.textContent = `You purchased: ${purchasedMoney}$`;
    boughtThing += 1;
    number -= 1.5;
    let bought = document.getElementById("bought");
    let money = document.getElementById("money");
    bought.textContent = `You bought: ${boughtThing} products`;
    money.textContent = `You have ${number}$ `;
  }
  function buyTomato() {
    purchasedMoney += 2;
    let purchased = document.getElementById("purchased");
    purchased.textContent = `You purchased: ${purchasedMoney}$`;
    boughtThing += 1;
    number -= 2;
    let bought = document.getElementById("bought");
    let money = document.getElementById("money");
    bought.textContent = `You bought: ${boughtThing} products`;
    money.textContent = `You have ${number}$ `;
  }
  return (
    <div className="App">
      <div className="Money">
        <h3 className="money" id="money">
          You have {number} $
        </h3>
        <h4 className="money" id="bought">
          You bought: null
        </h4>
        <h4 className="money" id="purchased">
          You purchased: null
        </h4>
      </div>
      <div>
        <ul className="things">
          <list className="hi potato">
            <img
              className="pImg"
              src={things[0].img}
              width={300}
              alt="potato"
            />
            <h4>Name: {things[0].nameOf}</h4>
            <p>Price: {things[0].price}$</p>
            <button onClick={buyPotato}>Buy Potato</button>
          </list>
          <list className="hi orange">
            <img
              className="pImg"
              src={things[1].img}
              width={300}
              alt="Tomato"
            />
            <h4>Name: {things[1].nameOf}</h4>
            <p>Price: {things[1].price}$</p>
            <button onClick={buyCarrot}>Buy Carrot</button>
          </list>
          <list className="hi red">
            <img
              className="pImg"
              src={things[2].img}
              width={300}
              alt="potato"
            />
            <h4>Name: {things[2].nameOf}</h4>
            <p>Price: {things[2].price}$</p>
            <button onClick={buyTomato}>Buy Potato</button>
          </list>
        </ul>
      </div>
    </div>
  );
}

export default Money;
