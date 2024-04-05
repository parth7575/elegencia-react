
import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import CommonHero from "../components/CommonHero/CommonHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import BookingSystem from "../components/BookingSystem/BookingSystem";
import GoogleMap from "../components/GoogleMap/GoogleMap";

export default function Reservations() {
  return (
    <>
      <CommonHero title={"Reservation"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container-fluid">
        <div className="ak-booking-system-map-from">
          <div className="booking-system-map">
            <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2105939765056!2d72.88200837503706!3d21.22349608047499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4a01c568eb%3A0x5bbaa4793a72c308!2sThe%20D%20Pizza!5e0!3m2!1sen!2sin!4v1712313164028!5m2!1sen!2sin" />
            <div className="booking-system-map-second">
              <div className="booking-system-heading">
                <SectionTitle
                  title={"Reservations"}
                  subTitle={"Reservations"}
                  animTwo={true}
                />
                <div className="ak-height-60 ak-height-lg-30"></div>
                <BookingSystem />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <SectionTitle
        title={"Nearby Find Us"}
        subTitle={"Visit Us"}
        tyle={"center"}
      />
      <div className="ak-height-65 ak-height-lg-30"></div>

      <LocationConatiner />
    </>
  );
}