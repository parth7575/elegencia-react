import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import FoodMenuItem from "./FoodMenuItem";
import { ButtonCommon } from "../Button/Button";

import itemShow from "/assets/img/itemShow/food-menu.png";

const foodMenu = [
  {
    title: "Paneer Tikka Pizza",
    price: "$50",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Pizza",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spicy Paneer Burger",
    price: "$25",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Burger",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Cheesy French Fries",
    price: "$20",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Fries",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Smoked Spaghetti",
    price: "$25",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Spaghetti ",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Vegetable Samosa",
    price: "$15",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Samosa",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Saffron Chat",
    price: "$10",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "chat",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Spring Rolls",
    price: "$15",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Spring rolls",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Fried Cheese Ravioli",
    price: "$10",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Ravioli",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Garlic Bread",
    price: "$10",
    image: "/assets/img/itemShow/item-show.png",
    subTitle: "Garlic Bread",
    priceSubTitle: "Extra free juice",
  },
  {
    title: "Jalapeno Proppers",
    price: "$9",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Proppers",
    priceSubTitle: "Extra free juice",
  },
];

export default function FoodMenuHome({ styleTwo }) {
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <SectionTitle
          title={"Appetizers"}
          subTitle={"Appetizers"}
          tyle={"center"}
        />
        <div className="ak-height-65 ak-height-lg-30"></div>
        {styleTwo == true ? (
          <div className="d-flex justify-content-between flex-wrap gap-5 gap-md-0">
            <div className="ak-menu-list style-2">
              {foodMenu?.slice(0, 5).map((item, index) => {
                return <FoodMenuItem key={index} data={item} />;
              })}
            </div>
            <div>
              <img src={itemShow} alt="..." />
            </div>
          </div>
        ) : (
          <div className="ak-menu-list">
            {foodMenu?.map((item, index) => {
              return <FoodMenuItem key={index} data={item} />;
            })}
          </div>
        )}

        <div className="ak-height-20 ak-height-lg-20"></div>

        <div className="text-md-center">
          <ButtonCommon to="/menu">View more</ButtonCommon>
        </div>
      </div>
    </section>
  );
}
