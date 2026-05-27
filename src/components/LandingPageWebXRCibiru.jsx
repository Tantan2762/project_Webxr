import React from "react";
import { Link } from "react-router-dom";
import LOGOCIBIRU from "../assets/LOGOCIBIRU.png";
import UPICIBIRU1 from "../assets/UPICIBIRU1.png";
import UPICIBIRU2 from "../assets/UPICIBIRU2.png";
import Sample from "../assets/Sample.png";
import Cibiru3d from "../assets/3D map Cibiru.png";
import f1 from "../assets/1.jpg";
import f2 from "../assets/2.jpg";
import f3 from "../assets/3.jpg";
import f4 from "../assets/4.jpg";
import f5 from "../assets/5.jpg";
import f6 from "../assets/6.jpg";
import f7 from "../assets/7.jpg";
import f8 from "../assets/8.jpg";
import f9 from "../assets/9.jpg";
import f10 from "../assets/10.jpg";
import f11 from "../assets/11.jpg";
import f12 from "../assets/12.jpg";
import f13 from "../assets/13.jpg";
import f14 from "../assets/14.jpg";
import f15 from "../assets/15.jpg";
import f16 from "../assets/16.jpg";
import f17 from "../assets/17.jpg";
import f18 from "../assets/18.jpg";
import f19 from "../assets/19.jpg";
import f20 from "../assets/20.jpg";
import f21 from "../assets/21.jpg";
import f22 from "../assets/22.jpg";
import f23 from "../assets/23.jpg";
import f24 from "../assets/24.jpg";
import f25 from "../assets/25.jpg";
import f26 from "../assets/26.jpg";
import f27 from "../assets/27.jpg";
import f28 from "../assets/28.jpg";
import f29 from "../assets/29.jpg";
import f30 from "../assets/30.jpg";
import f32 from "../assets/32.jpg";
import f33 from "../assets/33.jpg";
import f34 from "../assets/34.jpg";
import f35 from "../assets/35.jpg";
import f36 from "../assets/36.jpg";
import f37 from "../assets/37.jpg";
import f38 from "../assets/38.jpg";
import f39 from "../assets/39.jpg";
import f40 from "../assets/40.jpg";
import f41 from "../assets/41.jpg";
import f42 from "../assets/42.jpg";
import f43 from "../assets/43.jpg";

import {
  ScanQrCode,
  RectangleGoggles,
  Images,
  MoveRight,
  MapPin,
} from "lucide-react";
import ChatbotWidget from "./ChatbotWidget";

export default function LandingPageWebXR() {
  return (
    <div className="flex flex-col bg-white">
      <div className="self-stretch bg-white">
        <div className="flex flex-col items-center self-stretch">
          <div className="self-stretch relative mb-[60px] md:mb-[100px] lg:mb-[131px]">
            {/* Header */}
            <div
              className="self-stretch  bg-cover bg-center pb-[0px]"
              style={{
                backgroundImage: `url(${UPICIBIRU1})`,
              }}
            >
              <div className="flex flex-col items-center self-stretch bg-[#004060B0] pt-8">
                <div className="flex justify-between items-center w-full max-w-[1320px] px-4 md:px-6 mx-auto mb-[60px] md:mb-[100px]">
                  <img
                    src={LOGOCIBIRU}
                    className="w-auto h-[44px] md:h-[56px] lg:h-[70px] object-fill"
                  />
                  <div className="flex shrink-0 items-center gap-[42px]">
                    <Link
                      to="/"
                      className="text-[#1DB0E0] text-base no-underline hover:opacity-75 cursor-pointe transition-opacity duartion-200"
                    >
                      Home
                    </Link>
                    <Link
                      to="https://www.instagram.com/upicibiru_officiall?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      className="text-white text-base no-underline hover:opacity-75 cursor-pointe transition-opacity duartion-200"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <span className="text-white text-[22px] md:text-[32px] lg:text-[40px] font-bold text-center w-full max-w-[90vw] md:max-w-[600px] lg:max-w-[750px] px-4 mb-0">
                  {"Selamat datang di"}
                </span>
                <span className="text-white text-[22px] md:text-[32px] lg:text-[40px] font-bold text-center w-full max-w-[90vw] md:max-w-[600px] lg:max-w-[750px] px-4 mb-4 md:mb-[31px]">
                  {" Virtual Campus Tour Kampus UPI Cibiru"}
                </span>
                <span className="text-white text-sm md:text-base text-center w-full max-w-[90vw] md:max-w-[560px] lg:max-w-[691px] px-4 mb-[120px] md:mb-[200px] lg:mb-[277px]">
                  {
                    "Virtual Campus Tour Kampus UPI Cibiru memberikan pengalaman menjelajahi setiap sudut kampus secara virtual melalui perangkat digital, sehingga pengunjung dapat mengenal fasilitas, lingkungan, dan suasana akademik Kampus UPI Cibiru secara interaktif, informatif, dan imersif dari mana saja."
                  }
                </span>
              </div>
            </div>
            {/* Batas Header */}

            {/* Pilihan Fitur */}
            <div className="flex flex-col items-center self-stretch relative bottom-[-29px] right-0 left-0 px-4">
              <div
                className="flex flex-col items-center bg-white pt-[0px] rounded-[10px] w-full max-w-[1300px]"
                style={{ boxShadow: "0px 8px 20px #00000026" }}
              >
                <div className="flex flex-col lg:flex-row justify-around items-center w-full px-4 lg:px-8 py-4 lg:py-0 gap-4 lg:gap-0">
                  {/* AR Green Metric */}
                  <a
                    href="https://www.youtube.com/embed/7osOpNn8o3M?si=qOtu5bhC0dAhwxP1"
                    className="flex flex-1 flex-row lg:flex-col items-center gap-3 w-full lg:w-auto py-10 rounded-xl
        hover:bg-[#f5f5f5] hover:scale-90 transition-all duration-300 cursor-pointer"
                  >
                    <ScanQrCode className="w-[40px] h-[40px] lg:w-[92px] lg:h-[92px] text-[#009AD7]" />
                    <span className="text-[#535353] text-sm lg:text-2xl font-bold text-center">
                      AR Green Metric
                    </span>
                  </a>

                  <div className="w-full h-[1px] lg:w-[1px] lg:h-16 bg-black"></div>

                  {/* 3D VR Campus Tour */}
                  <a
                    href="https://new-web-vr-y24j.vercel.app/"
                    className="flex flex-1 flex-row lg:flex-col items-center gap-3 w-full lg:w-auto py-10 rounded-xl
        hover:bg-[#f5f5f5] hover:scale-90 transition-all duration-300 cursor-pointer"
                  >
                    <RectangleGoggles className="w-[40px] h-[40px] lg:w-[92px] lg:h-[92px] text-[#009AD7]" />
                    <span className="text-[#535353] text-sm lg:text-2xl font-bold text-center">
                      3D VR Campus Tour
                    </span>
                  </a>

                  <div className="w-full h-[1px] lg:w-[1px] lg:h-16 bg-black"></div>

                  {/* Galeri */}
                  <a
                    href="#galeri"
                    className="flex flex-1 flex-row lg:flex-col items-center gap-3 w-full lg:w-auto py-10 rounded-xl
        hover:bg-[#f5f5f5] hover:scale-90 transition-all duration-300 cursor-pointer"
                  >
                    <Images className="w-[40px] h-[40px] lg:w-[92px] lg:h-[92px] text-[#009AD7]" />
                    <span className="text-[#535353] text-sm lg:text-2xl font-bold text-center">
                      Galeri
                    </span>
                  </a>
                </div>

                <div className="bg-[#009AD7] w-full h-1.5 rounded-br-[5px] rounded-bl-[5px]"></div>
              </div>
            </div>
            {/* Batas Pilihan Fitur */}
          </div>
          {/* Batas Header Terluar */}
          {/* Informasi Cibiru */}
          {/* Informasi Cibiru */}
          <div className="mx-[20px]">
            <div
              className="flex flex-col lg:flex-row items-center self-stretch bg-white w-full max-w-[1300px] py-5 mb-[162px] mx-auto rounded-[15px] px-4 lg:px-0 "
              style={{
                boxShadow: "0px 8px 20px #00000026",
              }}
            >
              <div className="flex flex-col shrink-0 items-start w-full lg:w-auto lg:ml-[22px] lg:mr-[30px]">
                <img
                  src={UPICIBIRU2}
                  className="w-full lg:w-[478px] h-[220px] md:h-[300px] lg:h-[360px] object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-1 flex-col items-start mt-4 lg:mt-0 lg:mr-[20px]">
                <span className="text-[#192A3D] text-[22px] md:text-[28px] lg:text-[32px] font-bold mb-[26px] ml-[3px]">
                  {"Kampus UPI Cibiru"}
                </span>
                <span className="text-[#192A3D] text-sm md:text-base mb-8">
                  {
                    "Kampus UPI Cibiru merupakan salah satu kampus Universitas Pendidikan Indonesia yang berada di kawasan timur Kota Bandung dengan lingkungan yang hijau dan suasana akademik yang kondusif. Kampus ini menjadi pusat kegiatan pendidikan, penelitian, dan pengembangan mahasiswa dengan berbagai fasilitas pembelajaran serta ruang terbuka yang mendukung aktivitas akademik maupun kemahasiswaan."
                  }
                </span>

                <a
                  href="https://kd-cibiru.upi.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex flex-col items-start bg-[#1DB0E0] text-left py-2 px-[15px] rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200">
                    <span className="text-white text-base">
                      {"Selengkapnya"}
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Batas Informasi Cibiru */}
          {/* Batas Informasi Cibiru */}

          <span className="text-[#192A3D] text-[40px] font-bold mb-[92px]">
            {"Implementasi Green Metric Kampus UPI Cibiru !"}
          </span>
          <div className="mx-[20px]">
            <div
              className="flex flex-col lg:flex-row items-center self-stretch bg-white w-full max-w-[1300px]  py-5 mb-[162px] mx-auto rounded-[15px] px-4 lg:px-0 "
              style={{
                boxShadow: "0px 8px 20px #00000026",
              }}
            >
              <div className="flex flex-col shrink-0 items-start w-full lg:w-auto lg:ml-[22px] lg:mr-[30px]">
                <img
                  src={f40}
                  className="w-full h-full  lg:w-[478px] md:h-full lg:h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-1 flex-col items-start mt-4 lg:mt-0 lg:mr-[20px]">
                <span className="text-[#192A3D] text-[22px] md:text-[28px] lg:text-[32px] font-bold mb-[26px] ml-[3px]">
                  {"Pengolahan Sisa Makanan"}
                </span>
                <span className="text-[#192A3D] text-sm md:text-base mb-8">
                  {
                    "Menurut data dari World Resources Institute (WRI), emisi gas rumah kaca dari sampah makanan menyumbang 8% dari emisi global. Jika diibaratkan sebagai negara, limbah sampah makanan menjadi penghasil GRK terbesar ketiga tepat dibelakang Tiongkok dan AS. Sebagian besar emisi gas yang dihasilkan adalah gas metana, yang memiliki potensi 25 kali lebih tinggi dibanding karbon dioksida dalam meningkatkan pemanasan global."
                  }
                  {/* https://unnes.ac.id/feb/sejauh-mana-indonesia-darurat-sampah-makanan/ */}
                </span>

                <a
                  href="https://youtu.be/7osOpNn8o3M?si=Ixb5UfYOGm3nLnpn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex flex-col items-start bg-[#1DB0E0] text-left py-2 px-[15px] rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200">
                    <span className="text-white text-base">
                      {"Selengkapnya"}
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-[20px]">
            <div
              className="flex flex-col lg:flex-row items-center self-stretch bg-white w-full max-w-[1300px] py-5 mb-[162px] mx-auto rounded-[15px] px-4 lg:px-0 "
              style={{
                boxShadow: "0px 8px 20px #00000026",
              }}
            >
              <div className="flex flex-col shrink-0 items-start w-full lg:w-auto lg:ml-[22px] lg:mr-[30px]">
                <img
                  src={f41}
                  className="w-full h-full  lg:w-[478px] md:h-full lg:h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-1 flex-col items-start mt-4 lg:mt-0 lg:mr-[20px]">
                <span className="text-[#192A3D] text-[22px] md:text-[28px] lg:text-[32px] font-bold mb-[26px] ml-[3px]">
                  {"Pengolahan Sampah Daun Menguning/Coklat"}
                </span>
                <span className="text-[#192A3D] text-sm md:text-base mb-8">
                  {
                    "Sampah cokelat biasanya merupakan sumber karbon dalam kompos, contohnya adalah daun kering, tanah, dan jerami. Sedangkan sampah hijau merupakan sumber nitrogen dalam kompos, contohnya seperti sampah dapur sisa sayur-mayur dan buah-buahan."
                  }
                  {/* https://www.instagram.com/reel/CPFj1_sghFg/ */}
                </span>

                <a
                  href="https://youtu.be/7osOpNn8o3M?si=Ixb5UfYOGm3nLnpn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex flex-col items-start bg-[#1DB0E0] text-left py-2 px-[15px] rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200">
                    <span className="text-white text-base">
                      {"Selengkapnya"}
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-[20px]">
            <div
              className="flex flex-col lg:flex-row items-center self-stretch bg-white w-full max-w-[1300px] py-5 mb-[162px] mx-auto rounded-[15px] px-4 lg:px-0 "
              style={{
                boxShadow: "0px 8px 20px #00000026",
              }}
            >
              <div className="flex flex-col shrink-0 items-start w-full lg:w-auto lg:ml-[22px] lg:mr-[30px]">
                <img
                  src={f42}
                  className="w-full h-full  lg:w-[478px] md:h-full lg:h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-1 flex-col items-start mt-4 lg:mt-0 lg:mr-[20px]">
                <span className="text-[#192A3D] text-[22px] md:text-[28px] lg:text-[32px] font-bold mb-[26px] ml-[3px]">
                  {"Pengolahan Sampah Botol Plastik"}
                </span>
                <span className="text-[#192A3D] text-sm md:text-base mb-8">
                  {
                    "Sampah plastik merupakan jenis sampah yang sulit terurai dan paling banyak ditemukan di lingkungan. Sampah plastik seperti botol plastik merupakan produk sekali pakai dan biasanya dibuang sembarangan tempat yang jika dibiarkan secara terus-menerus akan menyebabkan pencemaran lingkungan."
                  }
                  {/* https://www.dmi-journals.org/jai/article/view/963 */}
                </span>

                <a
                  href="https://youtu.be/7osOpNn8o3M?si=Ixb5UfYOGm3nLnpn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex flex-col items-start bg-[#1DB0E0] text-left py-2 px-[15px] rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200">
                    <span className="text-white text-base">
                      {"Selengkapnya"}
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-[20px]">
            <div
              className="flex flex-col lg:flex-row items-center self-stretch bg-white w-full max-w-[1300px] py-5 mb-[162px] mx-auto rounded-[15px] px-4 lg:px-0 "
              style={{
                boxShadow: "0px 8px 20px #00000026",
              }}
            >
              <div className="flex flex-col shrink-0 items-start w-full lg:w-auto lg:ml-[22px] lg:mr-[30px]">
                <img
                  src={f43}
                  className="w-full h-full  lg:w-[478px] md:h-full lg:h-full object-cover rounded-[10px]"
                />
              </div>
              <div className="flex flex-1 flex-col items-start mt-4 lg:mt-0 lg:mr-[20px]">
                <span className="text-[#192A3D] text-[22px] md:text-[28px] lg:text-[32px] font-bold mb-[26px] ml-[3px]">
                  {"Pengolahan Sampah Botol Kaca"}
                </span>
                <span className="text-[#192A3D] text-sm md:text-base mb-8">
                  {
                    "Sampah botol kaca merupakan sampah anorganik yang tidak dapat mengalami pembusukan secara alami. Pengolahan botol kaca perlu diperkenalkan pada masyarakat untuk membantu mengurangi permasalahan penumpukan sampah anorganik.Pengolahan kaca sendiri merupakan salah satu kerajinan yang telah berkembang di Indonesia. Ada dua teknik pengolahan kaca yaitu teknik panas dan dingin. Kedua teknik ini dapat dikembangkan bersamaan dalam mengolah sampah botol kaca. "
                  }
                  {/* https://share.google/E3uyGBDD5Yrzw3JF7 */}
                </span>

                <a
                  href="https://youtu.be/7osOpNn8o3M?si=Ixb5UfYOGm3nLnpn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex flex-col items-start bg-[#1DB0E0] text-left py-2 px-[15px] rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200">
                    <span className="text-white text-base">
                      {"Selengkapnya"}
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <span className="text-[#192A3D] text-[40px] font-bold mb-[92px]">
            {"3D Virtual Campus Tour Kampus UPI Cibiru"}
          </span>

          <div className="w-full">
            <img src={Cibiru3d} className="w-full h-auto object-cover" />
          </div>

          {/* AR Card */}

          <span className="text-[#192A3D] text-[22px] md:text-[32px] lg:text-[40px] font-bold mb-[40px] md:mb-[60px] lg:mb-[92px] text-center px-4">
            {"Popular Best Spot"}
          </span>

          <div className="w-full px-4 mb-[80px] md:mb-[120px] lg:mb-[175px]">
            <div
              className="bg-white rounded-[10px] w-full max-w-[1300px] mx-auto p-6 lg:p-8"
              style={{ boxShadow: "0px 8px 20px #ffffff" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="relative flex flex-col items-center">
                  {/* Badge angka */}
                  <div className="absolute top-0 left-0 z-10 bg-[#FFC40C] py-3 px-[18px] rounded-[5px]">
                    <span className="text-black text-2xl font-bold">1</span>
                  </div>
                  {/* Card body */}
                  <div
                    className="flex flex-col items-center bg-neutral-100 rounded-[10px] w-full pt-1"
                    style={{ boxShadow: "12px 12px 33px #0000001A" }}
                  >
                    <img
                      src={f7}
                      className="w-full h-[200px] md:h-[250px] lg:h-[271px] object-cover rounded-t-[10px] mb-6"
                    />
                    <span className="text-black text-xl md:text-2xl font-bold mb-4 md:mb-[50px]">
                      {"Gedung Baru"}
                    </span>
                    <span className="text-black text-sm md:text-base text-center w-[80%] mb-8 md:mb-12">
                      {
                        "Gedung perkuliahan yang berisi kelas-kelas serta laboratorium berbagai Program Studi"
                      }
                    </span>
                    <a
                      href="https://new-web-vr-y24j.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center bg-[#1DB0E0] py-1 px-2 mb-6 md:mb-8 rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200 gap-1">
                        <RectangleGoggles
                          size={32}
                          color="#ffffff"
                          strokeWidth={5}
                          absoluteStrokeWidth
                        />
                        <span className="text-white text-base md:text-xl font-bold mx-2">
                          {"VR Tour"}
                        </span>
                        <MoveRight
                          size={24}
                          color="#ffffff"
                          strokeWidth={2}
                          absoluteStrokeWidth
                        />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-0 left-0 z-10 bg-[#FFC40C] py-3 px-[18px] rounded-[5px]">
                    <span className="text-black text-2xl font-bold">2</span>
                  </div>
                  <div
                    className="flex flex-col items-center bg-neutral-100 rounded-[10px] w-full pt-1"
                    style={{ boxShadow: "12px 12px 33px #0000001A" }}
                  >
                    <img
                      src={f3}
                      className="w-full h-[200px] md:h-[250px] lg:h-[271px] object-cover rounded-t-[10px] mb-6"
                    />
                    <span className="text-black text-xl md:text-2xl font-bold mb-4 md:mb-[50px]">
                      {"Gedung Biru"}
                    </span>
                    <span className="text-black text-sm md:text-base text-center w-[80%] mb-8 md:mb-12">
                      {
                        "Gedung perkantoran dan perkuliahan yang berisi kelas-kelas serta laboratorium berbagai Program Studi serta manajemen kampus"
                      }
                    </span>
                    <a
                      href="https://new-web-vr-y24j.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center bg-[#1DB0E0] py-1 px-2 mb-6 md:mb-8 rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200 gap-1">
                        <RectangleGoggles
                          size={32}
                          color="#ffffff"
                          strokeWidth={5}
                          absoluteStrokeWidth
                        />
                        <span className="text-white text-base md:text-xl font-bold mx-2">
                          {"VR Tour"}
                        </span>
                        <MoveRight
                          size={24}
                          color="#ffffff"
                          strokeWidth={2}
                          absoluteStrokeWidth
                        />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-0 left-0 z-10 bg-[#FFC40C] py-3 px-[18px] rounded-[5px]">
                    <span className="text-black text-2xl font-bold">3</span>
                  </div>
                  <div
                    className="flex flex-col items-center bg-neutral-100 rounded-[10px] w-full pt-1"
                    style={{ boxShadow: "12px 12px 33px #0000001A" }}
                  >
                    <img
                      src={f30}
                      className="w-full h-[200px] md:h-[250px] lg:h-[271px] object-cover rounded-t-[10px] mb-6"
                    />
                    <span className="text-black text-xl md:text-2xl font-bold mb-4 md:mb-[50px]">
                      {"Kantin Kampus"}
                    </span>
                    <span className="text-black text-sm md:text-base text-center w-[80%] mb-8 md:mb-12">
                      {
                        "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                      }
                    </span>
                    <a
                      href="https://new-web-vr-y24j.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="flex items-center bg-[#1DB0E0] py-1 px-2 mb-6 md:mb-8 rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200 gap-1">
                        <RectangleGoggles
                          size={32}
                          color="#ffffff"
                          strokeWidth={5}
                          absoluteStrokeWidth
                        />
                        <span className="text-white text-base md:text-xl font-bold mx-2">
                          {"VR Tour"}
                        </span>
                        <MoveRight
                          size={24}
                          color="#ffffff"
                          strokeWidth={2}
                          absoluteStrokeWidth
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Batas AR Card */}

          {/* AR Card */}
          <div className="w-full px-4 mb-[80px] md:mb-[120px] lg:mb-[175px]">
            <div
              className="flex flex-col bg-white rounded-[15px] w-full max-w-[1300px] mx-auto overflow-hidden py-6 gap-6"
              style={{ boxShadow: "0px 8px 20px #00000026" }}
            >
              {/* Header - badge angka + judul */}
              <div className="flex items-center px-4 gap-4">
                <div className="bg-[#FFC40C] py-2 px-4 rounded-[8px]">
                  <span className="text-black text-xl md:text-2xl font-bold">
                    4
                  </span>
                </div>
                <span className="text-black text-xl md:text-2xl font-bold">
                  Gedung Baru
                </span>
              </div>

              {/* Grid 4 card: 1 kolom di 320, 2 kolom di 768, 4 kolom di 1024 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-x md:divide-y divide-gray-300">
                {/* Card 1 */}
                <div className="flex flex-col items-center ">
                  <img
                    src={UPICIBIRU2}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover  mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Lobby"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://new-web-vr-y24j.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center bg-[#1DB0E0] py-1 px-2 mb-4 md:mb-8 rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200 gap-1">
                      <RectangleGoggles
                        size={28}
                        color="#ffffff"
                        strokeWidth={5}
                        absoluteStrokeWidth
                      />
                      <span className="text-white text-base md:text-xl font-bold mx-2">
                        {"VR Tour"}
                      </span>
                      <MoveRight
                        size={22}
                        color="#ffffff"
                        strokeWidth={2}
                        absoluteStrokeWidth
                      />
                    </button>
                  </a>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                  <img
                    src={f39}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Perpustakaan"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://new-web-vr-y24j.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center bg-[#1DB0E0] py-1 px-2 mb-4 md:mb-8 rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200 gap-1">
                      <RectangleGoggles
                        size={28}
                        color="#ffffff"
                        strokeWidth={5}
                        absoluteStrokeWidth
                      />
                      <span className="text-white text-base md:text-xl font-bold mx-2">
                        {"VR Tour"}
                      </span>
                      <MoveRight
                        size={22}
                        color="#ffffff"
                        strokeWidth={2}
                        absoluteStrokeWidth
                      />
                    </button>
                  </a>
                </div>

                {/* Card 1 */}
                <div className="flex flex-col items-center ">
                  <img
                    src={f22}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover  mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Ruang Audio Visual"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://new-web-vr-y24j.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center bg-[#1DB0E0] py-1 px-2 mb-4 md:mb-8 rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200 gap-1">
                      <RectangleGoggles
                        size={28}
                        color="#ffffff"
                        strokeWidth={5}
                        absoluteStrokeWidth
                      />
                      <span className="text-white text-base md:text-xl font-bold mx-2">
                        {"VR Tour"}
                      </span>
                      <MoveRight
                        size={22}
                        color="#ffffff"
                        strokeWidth={2}
                        absoluteStrokeWidth
                      />
                    </button>
                  </a>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center">
                  <img
                    src={f11}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Ruang Kuliah"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://new-web-vr-y24j.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center bg-[#1DB0E0] py-1 px-2 mb-4 md:mb-8 rounded-[5px] border-0 cursor-pointer hover:bg-[#FF8849] transition-colors duration-200 gap-1">
                      <RectangleGoggles
                        size={28}
                        color="#ffffff"
                        strokeWidth={5}
                        absoluteStrokeWidth
                      />
                      <span className="text-white text-base md:text-xl font-bold mx-2">
                        {"VR Tour"}
                      </span>
                      <MoveRight
                        size={22}
                        color="#ffffff"
                        strokeWidth={2}
                        absoluteStrokeWidth
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Batas 2 */}

          {/* Gallery */}

          <span className="text-[#192A3D] text-[22px] md:text-[32px] lg:text-[40px] font-bold mb-[40px] md:mb-[60px] lg:mb-[92px] text-center px-4">
            {"Galeri Kampus UPI Cibiru"}
          </span>

          <div
            id="galeri"
            className="w-full px-4 mb-[80px] md:mb-[120px] lg:mb-[175px]"
          >
            <div
              className="bg-white rounded-[10px] w-full max-w-[1300px] mx-auto p-4 md:p-6 lg:p-8"
              style={{ boxShadow: "0px 8px 20px #ffffff26" }}
            >
              {/* Grid: 1 kolom di 320, 2 kolom di 768, 3 kolom di 1024 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Foto 1 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f3} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Gedung Biru
                    </span>
                  </div>
                </div>

                {/* Foto 2 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f7} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Gedung Baru
                    </span>
                  </div>
                </div>

                {/* Foto 3 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f6} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Gedung I
                    </span>
                  </div>
                </div>

                {/* Foto 5 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f9} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Gedung Asrama
                    </span>
                  </div>
                </div>

                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f11} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Ruang Kelas
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f12} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Komputer Multimedia
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f13} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Komputer Inovasi
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f14} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Robotika Pendidikan
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f15} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Fotografi
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f16} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Audio
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f17} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Microteaching
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f18} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Komputer Mac
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f19} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Komputer Rekayasa Perangkat Lunak
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f20} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Komputer PGPAUD
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f21} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Bahasa
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f22} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Ruang Audio Visual
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f23} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Smart Classroom
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f24} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium IPS
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f25} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Matematika
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f26} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium Kesenian
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f27} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Laboratorium IPA
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f28} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Ruang Pertemuan Cawalaloka
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f29} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Ruang Aula Gedung Biru
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f30} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Kantin
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f39} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Perpustakaan
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f32} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Ruang Aula Gedung I
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f33} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Teater Terbuka
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f34} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Taman Baca
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f35} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Tribun
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f36} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Area Parkir Mobil
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f37} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Area Parkir Motor
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f38} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Bangku dan Gazebo
                    </span>
                  </div>
                </div>

                {/* Foto 4 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f1} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Masjid
                    </span>
                  </div>
                </div>

                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f2} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Poliklinik
                    </span>
                  </div>
                </div>

                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f4} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Gedung Perkuliahan
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f5} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Gedung Perkuliahan
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f8} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Lapangan Olahraga
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={f10} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Sekretariat Himpunan
                    </span>
                  </div>
                </div>
                {/* Foto 6 */}
              </div>
            </div>
          </div>
          {/* Batas Gallery */}

          {/* YT */}

          <span className="text-[#192A3D] text-[18px] md:text-[28px] lg:text-[40px] font-bold mb-[40px] md:mb-[60px] lg:mb-[92px] text-center px-4 max-w-[90vw] lg:max-w-[900px]">
            {"Lingkungan UPI Cibiru dengan lingkungan yang nyaman"}
          </span>

          <div className="w-full px-4 mb-[80px] md:mb-[120px] lg:mb-[175px]">
            <div
              className="bg-white rounded-[10px] w-full max-w-[1300px] mx-auto p-4 md:p-6 lg:p-8"
              style={{ boxShadow: "0px 8px 20px #ffffff" }}
            >
              {/* Grid: 1 kolom di 320, 1 kolom di 768, 2 kolom di 1024 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Video 7 */}
                <div
                  className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/7osOpNn8o3M?si=qOtu5bhC0dAhwxP1"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Video 1 */}
                <div
                  className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/kS69ZoFt5eM?si=tZb9jX5l7ts3EUrH"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video 2 */}
                <div
                  className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/J6eHY1sefy4?si=JE52bJmoFvPtNBwS"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video 3 */}
                <div
                  className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/2ElqUNkZ6s0?si=tqlwLjgDArB3wYQj"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video 4 */}
                <div
                  className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/1XpaDG3t2kg?si=Vg8_tyxZ3do6qUuV"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Video 5 */}
                <div
                  className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/fbb-C99oTNs?si=oSHUKwStvW56wwZE"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Video 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/VF3T3b-C1jw?si=qqAh3AlQQWAx3zUN"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Batas YT */}

          <div className="flex flex-col items-start self-stretch bg-[#155E85] py-[100px]">
            <div className="flex items-start mb-[41px] ml-[216px]">
              <span className="text-white text-5xl font-bold mr-[727px]">
                <img
                  src={LOGOCIBIRU}
                  className="w-auto h-[44px] md:h-[56px] lg:h-[70px] object-fill"
                />
              </span>
            </div>
            <span className="text-white text-3xl mb-8 ml-[214px] h-[44px] flex items-center gap-3">
              <MapPin color="#ffffff" size={40} />
              {"Alamat"}
            </span>

            <span className="text-white text-2xl mb-8 ml-[214px] leading-relaxed block">
              {
                "Loby Gedung Biru - Jalan Pendidikan No.15, Cibiru Wetan, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40625"
              }
            </span>
            <div className="flex items-center mb-[225px] ml-[213px] gap-5"></div>
          </div>
        </div>
      </div>
      <ChatbotWidget />
    </div>
  );
}
