import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [serachParams, setSearchParams] = useSearchParams();
  const success = serachParams.get("success");
  const orderId = serachParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(`${url}/api/order/verify`, {
      success: Boolean(success),
      orderId
    })

    if(response.data.success){
      navigate("/myorders")
    }
    else{
      navigate("/")
    }
  }

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify min-h-16 grid">
      <div className="spinner w-[100px] h-[100px] place-self-center border-[5px] border-solid border-[#bdbdbd] border-t-[tomato] rounded-[50%]"></div>
    </div>
  );
};

export default Verify;
