import "./styles.css";
import Payment from "./Payment/Payment.jsx";
export default function App() {
  return (
    <div className="App">
      <Payment
        colour={"#ffa500"}
        date={"28/10/20"}
        gift_text={"Amazon Gift"}
        pay_text={"Pay"}
        device_title={"Desktop - Mobile"}
        src_company={
          "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
        }
      />
      <br />
      <br />
      <Payment
        colour={"#f5f5f5"}
        date={"27 Sep 2020"}
        gift_text={"Apple Gift"}
        pay_text={"Payment"}
        device_title={"MacOS - Mobile"}
        src_company={
          "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png"
        }
      />
    </div>
  );
}
