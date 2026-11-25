import React from "react";

const Adress = () => {
  return (
    <>
      <div className="single_address">
        <div className="address_br">
          <span className="ti-location-pin"></span>
        </div>
        <h4>Address</h4>
        <p>
          3481 Melrose Place, <br />
          Beverly Hills
        </p>
      </div>
      <div className="single_address">
        <div className="address_br">
          <span className="ti-mobile"></span>
        </div>
        <h4>Phone</h4>
        <p>+512 513 96324</p>
        <p>+512 513 96324</p>
      </div>
      <div className="single_address">
        <div className="address_br">
          <span className="ti-email"></span>
        </div>
        <h4>Email</h4>
        <p>example@yourmail.com</p>
        <p>info@yourmail.com</p>
      </div>
    </>
  );
};

export default Adress;
