import React from 'react';
import { motion } from 'framer-motion';

function Products() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Sản phẩm của chúng tôi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Đặc điểm:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-amber-600">{product.price}</span>
                <button className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition">
                  Đặt hàng
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Mật ong rừng nguyên chất",
    description: "Mật ong rừng tự nhiên 100%, thu hoạch từ những cánh rừng nguyên sinh",
    price: "350.000đ",
    image: "https://images.unsplash.com/photo-1587049352847-4a22c7aa020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "100% tự nhiên",
      "Giàu vitamin và khoáng chất",
      "Không pha trộn",
      "Có giấy chứng nhận an toàn"
    ]
  },
  {
    id: 2,
    name: "Mật ong hoa nhãn",
    description: "Mật ong hoa nhãn tinh khiết, hương vị đặc trưng",
    price: "280.000đ",
    image: "https://images.unsplash.com/photo-1587049352834-9955c0f89b15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Hương vị đặc trưng",
      "Màu sắc vàng óng",
      "Độ đặc vừa phải",
      "Phù hợp pha trà, làm đẹp"
    ]
  },
  {
    id: 3,
    name: "Mật ong sữa chúa",
    description: "Kết hợp hoàn hảo giữa mật ong và sữa chúa tự nhiên",
    price: "450.000đ",
    image: "https://images.unsplash.com/photo-1587049352826-6ed40f6b5707?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Tăng cường sức khỏe",
      "Giàu dưỡng chất",
      "Hỗ trợ miễn dịch",
      "Thích hợp mọi lứa tuổi"
    ]
  }
];

export default Products;