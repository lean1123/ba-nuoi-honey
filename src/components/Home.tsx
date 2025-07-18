import { motion } from "framer-motion";
import { ArrowRight, Award, Check, Leaf, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Mật Ong Ba Nuôi - Mật Ong Rừng U Minh Nguyên Chất</title>
        <meta
          name="description"
          content="Mật Ong Ba Nuôi - 100% nguyên chất từ rừng U Minh, không pha trộn, đạt chuẩn an toàn thực phẩm."
        />
        <meta
          property="og:title"
          content="Mật Ong Ba Nuôi - Mật Ong Rừng Nguyên Chất"
        />
        <meta
          property="og:description"
          content="Mật ong Ba Nuôi được thu hoạch thủ công từ rừng tràm U Minh, đảm bảo nguyên chất và giàu dưỡng chất tự nhiên."
        />
      </Helmet>
      <div className="relative h-[600px]">
        <img
          src="/banner-native.jpg"
          alt="banner-honey"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 mt-96 flex items-center justify-center text-center bg-white rounded-t-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-sans text-left mt-24"
          >
            <h1 className="text-5xl font-extrabold uppercase leading-tight">
              <span className="text-orange-400/80">
                Mật ong tinh khiết, vị ngọt tự nhiên
              </span>
              <br />
              <span className="text-orange-400">Mật Ong Ba Nuôi</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-orange-400">
              <span className="font-bold">Không có gì đáng ngờ cả</span> — nhận
              món quà sức khỏe từ thiên nhiên khi bạn sử dụng Mật Ong Ba Nuôi.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-orange-400 text-white font-sans font-semibold 
              px-8 py-3 rounded-full text-lg hover:bg-white hover:text-orange-400 transition shadow-md mt-2"
            >
              Đặt hàng ngay <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          <img src="/honey-hehe.gif" alt="hehehe" className="w-64 mt-4" />
        </div>
      </div>

      <section className="py-16 bg-white ">
        <div className="container mx-auto px-8">
          <div
            className="max-w-3xl mx-auto text-center mb-16 text-orange-400 font-sans
          font-semibold mt-24"
          >
            <h2 className="text-3xl font-bold mb-6">
              Quy Trình Thu Hoạch An Toàn
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="/quy-trinh.png"
                alt="Mật ong nguyên chất"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">Mật Ong Nguyên Chất</h3>
                <p className="">Màu sắc vàng óng tự nhiên</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="quy-trinh-2.jpg"
                alt="Quy trình thu hoạch"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">Quy Trình Thu Hoạch</h3>
                <p className="">Thu hoạch thủ công, đảm bảo chất lượng</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="dong-goi-2.jpg"
                alt="Đóng gói sản phẩm"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg">Đóng Gói Cẩn Thận</h3>
                <p className="">Bảo quản tối ưu, giữ trọn dưỡng chất</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                Đặc điểm nổi bật
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Check className="text-amber-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">100% Nguyên Chất</h4>
                    <p className="">
                      Không pha trộn, không thêm đường hay chất bảo quản
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="text-amber-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">Chứng Nhận Chất Lượng</h4>
                    <p className="text-gray-600">
                      Đạt tiêu chuẩn vệ sinh an toàn thực phẩm
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Leaf className="text-amber-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">Nguồn Gốc Tự Nhiên</h4>
                    <p className="text-gray-600">
                      Thu hoạch từ rừng tràm U Minh nguyên sinh
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="text-amber-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">Bảo Quản Tự Nhiên</h4>
                    <p className="text-gray-600">
                      Giữ nguyên dưỡng chất trong thời gian dài
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src="mat-ong-1.jpg"
                alt="Mật ong detail 1"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="mat-ong-2.jpg"
                alt="Mật ong detail 2"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src="mat-ong-3.jpg"
                alt="Mật ong detail 3"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src="dong-goi.jpg"
                alt="Mật ong detail 4"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Thông tin sản phẩm
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Thành phần</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>100% mật ong rừng tràm nguyên chất</li>
                    <li>Giàu vitamin và khoáng chất</li>
                    <li>Chứa các enzyme tự nhiên</li>
                    <li>Không có chất bảo quản</li>
                  </ul>
                </div>
                <div className="ml-44">
                  <h4 className="font-semibold mb-4">Công dụng</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Tăng cường sức đề kháng</li>
                    <li>Hỗ trợ tiêu hóa</li>
                    <li>Làm đẹp da</li>
                    <li>Giảm ho, đau họng</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-4">
                  350.000đ/chai
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-orange-400 text-white px-8 py-3 
                  rounded-full text-lg hover:bg-white hover:text-orange-400 font-sans font-semibold shadow-md transition"
                >
                  Đặt hàng ngay{" "}
                  <ArrowRight className="ml-2 h-5 w-5 font-semibold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50 px-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-400 font-sans">
            Cam Kết Của Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chất Lượng</h3>
              <p className="text-gray-600">
                Cam kết 100% nguyên chất, hoàn tiền nếu phát hiện pha trộn
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Uy Tín</h3>
              <p className="text-gray-600">
                10 năm kinh nghiệm, được hàng nghìn khách hàng tin tưởng
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tự Nhiên</h3>
              <p className="text-gray-600">
                Thu hoạch và đóng gói theo quy trình khép kín, đảm bảo vệ sinh
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
