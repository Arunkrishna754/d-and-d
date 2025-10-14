import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/api";
import React from "react";

const AddProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // for editing
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    if (id) {
      API.get(`/products/${id}`).then((res) => {
        setFormData({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
          image: res.data.image || null, // Cloudinary URL
        });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      if (id) {
        await API.put(`/products/${id}`, data);
      } else {
        await API.post("/products", data);
      }
      navigate("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Error saving product");
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">{id ? "Edit" : "Add"} Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <input type="file" name="image" onChange={handleChange} className="md:w-auto" />

          {formData.image && (
            <div className="mt-2 md:mt-0">
              <img
                src={
                  typeof formData.image === "string"
                    ? formData.image
                    : URL.createObjectURL(formData.image)
                }
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
            {id ? "Update" : "Add"} Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
