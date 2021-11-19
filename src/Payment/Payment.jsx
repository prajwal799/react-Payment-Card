import React from "react";
import Arrow from "./Arrow.jsx";
import Button from "./Button.jsx";
import ComapanyLogo from "./CompanyLogo.jsx";
import Date from "./Date.jsx";
import Text from "./Text.jsx";
const Payment = ({
  colour,
  date,
  gift_text,
  pay_text,
  device_title,
  src_company
}) => {
  return (
    <div
      className="Payment_box"
      style={{
        background: `${colour}`
      }}
    >
      <div className="Flex">
        <Date date={date} />
        <ComapanyLogo src={src_company} />
      </div>
      <Button title={"Case Study"} backGround={"black"} />
      <Text title={gift_text} fontSize={"36px"} />
      <Text title={pay_text} fontSize={"36px"} />
      <div className="Flex">
        <Text title={device_title} fontSize={"20px"} />
        <Arrow num={"&#8594"} />
      </div>
    </div>
  );
};

export default Payment;
