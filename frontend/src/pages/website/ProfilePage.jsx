import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API } from "../../api";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: localStorage.getItem("userName") || "",
    email: localStorage.getItem("userEmail") || "",
  });
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState({ street: "", city: "", state: "", pincode: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const res = await API.get("/profile/addresses", headers);
      setAddresses(res.data.addresses || []);
    } catch (err) {
      toast.error("Failed to fetch addresses");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!/^641\d{3}$/.test(form.pincode)) return toast.error("Only Coimbatore pincodes allowed");
    if (!/^\d{10}$/.test(form.phone)) return toast.error("Enter valid 10-digit phone");

    setLoading(true);
    try {
      let res;
      if (editId) {
        res = await API.put(`/profile/addresses/${editId}`, form, headers);
        toast.success("Address updated");
      } else {
        res = await API.post("/profile/addresses", form, headers);
        toast.success("Address added");
      }
      setAddresses(res.data.addresses || []);
      setForm({ street: "", city: "", state: "", pincode: "", phone: "" });
      setEditId(null);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error saving address");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (addr) => {
    setForm(addr);
    setEditId(addr._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await API.delete(`/profile/addresses/${id}`, headers);
      setAddresses(res.data.addresses || []);
      toast.success("Address deleted");
    } catch (err) {
      toast.error("Failed to delete address");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-20">
      {/* User Info */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Profile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" value={user.name} disabled className="p-3 border rounded" />
          <input type="email" value={user.email} disabled className="p-3 border rounded" />
        </div>
      </div>

      {/* Address Form */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">{editId ? "Edit Address" : "Add New Address"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="street" value={form.street} onChange={handleChange} placeholder="Street" className="p-3 border rounded" />
          <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="p-3 border rounded" />
          <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="p-3 border rounded" />
          <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode" className="p-3 border rounded" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 border rounded" />
        </div>
        <button
          onClick={handleSave}
          disabled={loading}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Saving..." : editId ? "Update Address" : "Add Address"}
        </button>
      </div>

      {/* Address Table / Cards */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>

        {/* Desktop Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Street</th>
                <th className="border px-2 py-1">City</th>
                <th className="border px-2 py-1">State</th>
                <th className="border px-2 py-1">Pincode</th>
                <th className="border px-2 py-1">Phone</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {addresses.length > 0 ? (
                addresses.map((addr) => (
                  <tr key={addr._id}>
                    <td className="border px-2 py-1">{addr.street}</td>
                    <td className="border px-2 py-1">{addr.city}</td>
                    <td className="border px-2 py-1">{addr.state}</td>
                    <td className="border px-2 py-1">{addr.pincode}</td>
                    <td className="border px-2 py-1">{addr.phone}</td>
                    <td className="border px-2 py-1 space-x-2">
                      <button onClick={() => handleEdit(addr)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(addr._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-2">No addresses added</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden flex flex-col gap-4">
          {addresses.length > 0 ? (
            addresses.map((addr) => (
              <div key={addr._id} className="bg-gray-50 rounded-lg p-4 shadow">
                <p><span className="font-semibold">Street:</span> {addr.street}</p>
                <p><span className="font-semibold">City:</span> {addr.city}</p>
                <p><span className="font-semibold">State:</span> {addr.state}</p>
                <p><span className="font-semibold">Pincode:</span> {addr.pincode}</p>
                <p><span className="font-semibold">Phone:</span> {addr.phone}</p>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => handleEdit(addr)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(addr._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No addresses added</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
