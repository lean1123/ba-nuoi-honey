import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Package, Truck, CreditCard } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    quantity: 1,
    message: "",
    paymentMethod: "cod",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value =
      e.target.type === "number" ? parseInt(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Đặt Hàng</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Thông tin sản phẩm</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Package className="text-amber-600" />
                <div>
                  <h3 className="font-semibold">Mật Ong Rừng U Minh</h3>
                  <p className="text-gray-600">350.000đ/chai</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Truck className="text-amber-600" />
                <div>
                  <h3 className="font-semibold">Phí vận chuyển</h3>
                  <p className="text-gray-600">
                    Miễn phí vận chuyển cho đơn hàng từ 2 chai
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <CreditCard className="text-amber-600" />
                <div>
                  <h3 className="font-semibold">Phương thức thanh toán</h3>
                  <p className="text-gray-600">COD hoặc chuyển khoản</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="font-semibold">Thông tin liên hệ</h3>
              <div className="flex items-center space-x-4">
                <Phone className="text-amber-600" />
                <div>
                  <p>0987 835 247</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-amber-600" />
                <div>
                  <p>lethanhan20039@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-amber-600" />
                <div>
                  <p>
                    16/17/182 đường Hiệp Bình, p Hiệp Bình Chánh, Thủ Đức,
                    TP.HCM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Thông tin đặt hàng</h2>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Địa chỉ giao hàng
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Số lượng (chai)
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phương thức thanh toán
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                required
              >
                <option value="cod">Thanh toán khi nhận hàng (COD)</option>
                <option value="transfer">Chuyển khoản ngân hàng</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ghi chú
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition"
              >
                Xác nhận đặt hàng
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
