import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = ({ url }) => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Pure Veg",
    price: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Sandwich",
        price: "",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="add w-[70%] mt-[50px] text-[#6d6d6d] text-base">
      <form className="flex-cols" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-cols">
          <p>Upload Image</p>
          <label htmlFor="image" className="w-[120px]">
            <img
              className="w-[120px]"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className=""
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-cols">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price flex gap-[30px]">
          <div className="add-category flex-cols">
            <p>Product Category</p>
            <select
              value={data.category}
              onChange={onChangeHandler}
              className="max-w-[120px] p-[10px]"
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-cols">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              className="max-w-[120px] p-[10px]"
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-btn max-w-[120px] border-none p-[10px] bg-black text-white cursor-pointer"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
