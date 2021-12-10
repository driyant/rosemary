import React from "react";
import Iframe from "react-iframe";

const Maps = () => {
  return (
    <>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24330687.90933074!2d0!3d-68.1483764880217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAntarctica!5e0!3m2!1sen!2sid!4v1639140975591!5m2!1sen!2sid"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      ></Iframe>
    </>
  );
};

export default Maps;
