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
    priceSubTitle: "Extra ketchup free",
  },
  {
    title: "Spicy Paneer Burger",
    price: "$25",
    image: "/assets/img/itemShow/item-show_2.png",
    subTitle: "Burger",
    priceSubTitle: "Extra ketchup free",
  },
  {
    title: "Cheesy French Fries",
    price: "$20",
    image: "/assets/img/itemShow/item-show_3.png",
    subTitle: "Fries",
    priceSubTitle: "Extra ketchup free",
  },
  {
    title: "Smoked Spaghetti",
    price: "$25",
    image: "/assets/img/itemShow/item-show_4.png",
    subTitle: "Spaghetti ",
    priceSubTitle: "Extra juice free",
  },
  {
    title: "Vegetable Samosa",
    price: "$15",
    image: "/assets/img/itemShow/item-show_5.png",
    subTitle: "Samosa",
    priceSubTitle: "Extra chutney free",
  },
  {
    title: "Dahi Chat",
    price: "$20",
    image: "/assets/img/itemShow/item-show_6.png",
    subTitle: "Chat",
    priceSubTitle: "Extra dahi free",
  },
  {
    title: "Spring Rolls",
    price: "$15",
    image: "/assets/img/itemShow/item-show_7.png",
    subTitle: "Spring rolls",
    priceSubTitle: "Extra ketchup free",
  },
  {
    title: "Fried Cheese Ravioli",
    price: "$10",
    image: "/assets/img/itemShow/item-show_8.png",
    subTitle: "Ravioli",
    priceSubTitle: "Extra sauce free",
  },
  {
    title: "Garlic Bread",
    price: "$10",
    image: "/assets/img/itemShow/item-show_9.png",
    subTitle: "Garlic Bread",
    priceSubTitle: "Extra ketchup free",
  },
  {
    title: "Jalapeno Proppers",
    price: "$9",
    image: "/assets/img/itemShow/item-show_10.png",
    subTitle: "Proppers",
    priceSubTitle: "Extra ketchup free",
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
