import { useState, useEffect } from "react";
// import VideoCardData from "../json/VideoCardData.json";
import axios from "axios";
import { Link } from "react-router-dom";

const VideoListSections = () => {
  // const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  // useEffect(() => {
  //   const mappedData = VideoCardData.map((item) => ({
  //     img: item.img,
  //     category: item.category,
  //     profile: item.profile,
  //     userName: item.userName,
  //     userRole: item.userRole,
  //     name: item.name,
  //     desc: item.description,
  //   }));
  //   setData(mappedData);
  // }, []);

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6793cb9d5eae7e5c4d8fead7.mockapi.io/api/article")
      .then((response) => setAPIData(response.data));
  }, []);

  const setData = (data) => {
    let { id, judul, deskripsi, kategori, harga } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Judul", judul);
    localStorage.setItem("Deskripsi", deskripsi);
    localStorage.setItem("Kategori", kategori);
    localStorage.setItem("Harga", harga);
  };
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 p-8 text-start">
        <div className="flex flex-col gap-8 w-[80vw]">
          <div className="flex flex-col self-start gap-2 p-8">
            <h2 className="text-4xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="font-semibold text-gray-500">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
            <ul className="flex gap-6 mt-12 font-semibold text-gray-500 cursor-pointer">
              <li
                className={`px-5 py-2 ${
                  category === ""
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("")}
              >
                Semua Kelas
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "pemasaran"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("pemasaran")}
              >
                Pemasaran
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "desain"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("desain")}
              >
                Desain
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "pengembanganDiri"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("pengembanganDiri")}
              >
                Pengembangan Diri
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "bisnis"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("bisnis")}
              >
                Bisnis
              </li>
            </ul>
          </div>
          <Link
            to="/edit-postingan"
            className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {APIData.length > 0 ? (
              APIData.filter(
                (item) => category === "" || item.kategori === category
              ).map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start w-full p-6 gap-3 bg-white shadow-md rounded-xl hover:scale-90 cursor-pointer animate"
                  onClick={() => setData(item)}
                >
                  <img
                    src="thumbnail/video-thumb-1.jpg"
                    alt="Course Thumbnail"
                    className="object-cover w-full h-56 mb-4 rounded-md"
                  />
                  <h2 className="text-xl font-bold">
                    {item.judul.length > 16
                      ? item.judul.slice(0, 37) + "..."
                      : item.judul}
                  </h2>
                  <i className="text-gray-500">Rp. {item.harga}</i>
                  <p className="font-semibold text-gray-500">
                    {item.deskripsi}
                  </p>
                  <div className="flex flex-row gap-4">
                    <img
                      src="thumbnail/profile-2.png"
                      className="w-[12%] rounded-xl"
                      alt="Profile Image"
                    />
                    <div>
                      <h2 className="font-semibold">Jenna Ortega</h2>
                      <p>Senior Accountant di Gojek</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-500">Loading...</p>
            )}
          </Link>
        </div>
      </section>
    </>
  );
};

export default VideoListSections;
