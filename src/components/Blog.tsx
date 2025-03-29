import React from 'react';
import { motion } from 'framer-motion';

function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-1/2" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-amber-500 px-3 py-1 rounded-full text-sm">{post.category}</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <button className="text-amber-600 hover:text-amber-700 font-semibold">
                  Đọc thêm →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

const blogPosts = [
  {
    id: 1,
    title: "10 công dụng tuyệt vời của mật ong đối với sức khỏe",
    excerpt: "Khám phá những lợi ích không ngờ của mật ong trong việc tăng cường sức khỏe và làm đẹp...",
    image: "https://images.unsplash.com/photo-1587049352616-e9c82895f7e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Sức khỏe",
    date: "15/03/2024"
  },
  {
    id: 2,
    title: "Cách phân biệt mật ong thật và giả",
    excerpt: "Hướng dẫn chi tiết cách nhận biết mật ong nguyên chất và mật ong pha trộn...",
    image: "https://images.unsplash.com/photo-1587049352647-9a128b5ccc2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Kiến thức",
    date: "10/03/2024"
  },
  {
    id: 3,
    title: "Quy trình thu hoạch mật ong tự nhiên",
    excerpt: "Tìm hiểu về quy trình thu hoạch mật ong tự nhiên từ những người nuôi ong chuyên nghiệp...",
    image: "https://images.unsplash.com/photo-1587049352731-357a9e2d9f72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Sản xuất",
    date: "05/03/2024"
  },
  {
    id: 4,
    title: "5 công thức làm đẹp với mật ong",
    excerpt: "Khám phá những công thức làm đẹp tự nhiên hiệu quả từ mật ong...",
    image: "https://images.unsplash.com/photo-1587049352744-9b7c9f92795a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Làm đẹp",
    date: "01/03/2024"
  }
];

export default Blog;