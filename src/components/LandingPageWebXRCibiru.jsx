import React from "react";
import { Link } from "react-router-dom";
import LOGOCIBIRU from "../assets/LOGOCIBIRU.png";
import UPICIBIRU1 from "../assets/UPICIBIRU1.png";
import UPICIBIRU2 from "../assets/UPICIBIRU2.png";
import Sample from "../assets/Sample.png";
import { ScanQrCode, RectangleGoggles, Images, MoveRight } from "lucide-react";
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
                      to="/about"
                      className="text-[#1DB0E0] text-base no-underline hover:opacity-75 cursor-pointe transition-opacity duartion-200"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
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
                  <div className="flex flex-1 flex-row lg:flex-col items-center gap-3 w-full lg:w-auto py-10">
                    <ScanQrCode className="w-[40px] h-[40px] lg:w-[92px] lg:h-[92px] text-[#009AD7]" />
                    <span className="text-[#535353] text-sm lg:text-2xl font-bold text-center">
                      AR Green Metric
                    </span>
                  </div>

                  <div className="w-full h-[1px] lg:w-[1px] lg:h-16 bg-black"></div>

                  <div className="flex flex-1 flex-row lg:flex-col items-center gap-3 w-full lg:w-auto py-10">
                    <RectangleGoggles className="w-[40px] h-[40px] lg:w-[92px] lg:h-[92px] text-[#009AD7]" />
                    <span className="text-[#535353] text-sm lg:text-2xl font-bold text-center">
                      3D VR Campus Tour
                    </span>
                  </div>

                  <div className="w-full h-[1px] lg:w-[1px] lg:h-16 bg-black"></div>

                  <div className="flex flex-1 flex-row lg:flex-col items-center gap-3 w-full lg:w-auto py-10">
                    <Images className="w-[40px] h-[40px] lg:w-[92px] lg:h-[92px] text-[#009AD7]" />
                    <span className="text-[#535353] text-sm lg:text-2xl font-bold text-center">
                      Galeri
                    </span>
                  </div>
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
            {"Mulai dengan AR Cibiru !"}
          </span>
          <div className="flex flex-col items-center self-stretch bg-[#AAB5C3] py-[362px] mb-[175px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZrwsYnXBJ/3y11g7ch_expires_30_days.png"
              }
              className="w-[210px] h-[210px] object-fill"
            />
          </div>

          <span className="text-[#192A3D] text-[40px] font-bold mb-[92px]">
            {"3D Virtual Campous Tour Kampus UPI Cibiru"}
          </span>
          <div className="flex flex-col items-center self-stretch bg-[#AAB5C3] py-[362px] mb-[175px]">
            <img
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZrwsYnXBJ/3y11g7ch_expires_30_days.png"
              }
              className="w-[210px] h-[210px] object-fill"
            />
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
                    <span className="text-black text-2xl font-bold">6</span>
                  </div>
                  {/* Card body */}
                  <div
                    className="flex flex-col items-center bg-neutral-100 rounded-[10px] w-full pt-1"
                    style={{ boxShadow: "12px 12px 33px #0000001A" }}
                  >
                    <img
                      src={Sample}
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
                      href="https://kd-cibiru.upi.edu/"
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
                    <span className="text-black text-2xl font-bold">6</span>
                  </div>
                  <div
                    className="flex flex-col items-center bg-neutral-100 rounded-[10px] w-full pt-1"
                    style={{ boxShadow: "12px 12px 33px #0000001A" }}
                  >
                    <img
                      src={Sample}
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
                      href="https://kd-cibiru.upi.edu/"
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
                    <span className="text-black text-2xl font-bold">6</span>
                  </div>
                  <div
                    className="flex flex-col items-center bg-neutral-100 rounded-[10px] w-full pt-1"
                    style={{ boxShadow: "12px 12px 33px #0000001A" }}
                  >
                    <img
                      src={Sample}
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
                      href="https://kd-cibiru.upi.edu/"
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
                  Gedung Biru
                </span>
              </div>

              {/* Grid 4 card: 1 kolom di 320, 2 kolom di 768, 4 kolom di 1024 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-x md:divide-y divide-gray-300">
                {/* Card 1 */}
                <div className="flex flex-col items-center ">
                  <img
                    src={Sample}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover  mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Kantin Kampus"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://kd-cibiru.upi.edu/"
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
                    src={Sample}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Kantin Kampus"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://kd-cibiru.upi.edu/"
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
                    src={Sample}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover  mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Kantin Kampus"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://kd-cibiru.upi.edu/"
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
                    src={Sample}
                    className="w-full h-[180px] md:h-[200px] lg:h-[271px] object-cover mb-4 md:mb-[33px]"
                  />
                  <span className="text-black text-lg md:text-2xl font-bold mb-3 md:mb-[50px] text-center">
                    {"Kantin Kampus"}
                  </span>
                  <span className="text-black text-sm md:text-base text-center w-[90%] mb-6 md:mb-12">
                    {
                      "Tempat kuliner yang menyediakan berbagai macam makanan dan minuman yang sangat enak"
                    }
                  </span>
                  <a
                    href="https://kd-cibiru.upi.edu/"
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
            {"Indikator"}
          </span>

          <div className="w-full px-4 mb-[80px] md:mb-[120px] lg:mb-[175px]">
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
                  <img src={Sample} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Judul
                    </span>
                  </div>
                </div>

                {/* Foto 2 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={Sample} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Judul
                    </span>
                  </div>
                </div>

                {/* Foto 3 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={Sample} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Judul
                    </span>
                  </div>
                </div>

                {/* Foto 4 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={Sample} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Judul
                    </span>
                  </div>
                </div>

                {/* Foto 5 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={Sample} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Judul
                    </span>
                  </div>
                </div>

                {/* Foto 6 */}
                <div
                  className="relative w-full h-[200px] md:h-[230px] lg:h-[271px] rounded-[10px] overflow-hidden"
                  style={{ boxShadow: "12px 12px 33px #0000001A" }}
                >
                  <img src={Sample} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#155E85]/40"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-white text-lg font-semibold">
                      Judul
                    </span>
                  </div>
                </div>
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
                    src="https://www.youtube.com/embed/kS69ZoFt5eM?si=tZb9jX5l7ts3EUrH"
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
                    src="https://www.youtube.com/embed/kS69ZoFt5eM?si=tZb9jX5l7ts3EUrH"
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
                    src="https://www.youtube.com/embed/kS69ZoFt5eM?si=tZb9jX5l7ts3EUrH"
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
                {"LOGO"}
              </span>
              <span className="text-white text-xl mt-5 mr-[107px]">
                {"Lorem Ipsum"}
              </span>
              <span className="text-white text-xl mt-5">{"Lorem Ipsum"}</span>
            </div>
            <span className="text-white text-xl mb-8 ml-[214px]">
              {"Ruang Lorem Ipsum Ruang Lorem Ipsum"}
            </span>
            <div className="flex items-center mb-[225px] ml-[213px] gap-5">
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZrwsYnXBJ/3m9lmlpj_expires_30_days.png"
                }
                className="w-[52px] h-[52px] object-fill"
              />
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZrwsYnXBJ/9d578pu0_expires_30_days.png"
                }
                className="w-[52px] h-[52px] object-fill"
              />
              <img
                src={
                  "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/uZrwsYnXBJ/591k0nvb_expires_30_days.png"
                }
                className="w-[52px] h-[52px] object-fill"
              />
            </div>
            <div className="flex items-center self-stretch max-w-[1492px] mx-auto">
              <span className="text-white text-xl">
                {"Ruang Lorem Ipsum Ruang Lorem Ipsum"}
              </span>
              <div className="flex-1 self-stretch"></div>
              <span className="text-white text-xl mr-[107px]">
                {"Lorem Ipsum"}
              </span>
              <span className="text-white text-xl">{"Lorem Ipsum"}</span>
            </div>
          </div>
        </div>
      </div>
      <ChatbotWidget />
    </div>
  );
}
