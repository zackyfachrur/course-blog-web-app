import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/Hooks";
import { fetchVideos } from "@store/VideoAsyncThunk";
import { LocalStorage } from "@type/PageType";
import { Link } from "react-router-dom";

const VideoListSection = () => {
  const [category, setCategory] = useState("");
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const saveToLocalStorage = (video: LocalStorage) => {
    localStorage.setItem("ID", video.id);
    localStorage.setItem("Judul", video.judul);
    localStorage.setItem("Deskripsi", video.deskripsi);
    localStorage.setItem("Kategori", video.kategori);
    localStorage.setItem("Harga", video.harga);
  };

  const handleCategoryClick = (selectedCategory: string) => {
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
                    ? "text-amber-500 border-b-4 border-amber-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("")}
              >
                Semua Kelas
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "pemasaran"
                    ? "text-amber-500 border-b-4 border-amber-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("pemasaran")}
              >
                Pemasaran
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "desain"
                    ? "text-amber-500 border-b-4 border-amber-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("desain")}
              >
                Desain
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "pengembanganDiri"
                    ? "text-amber-500 border-b-4 border-amber-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("pengembanganDiri")}
              >
                Pengembangan Diri
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "bisnis"
                    ? "text-amber-500 border-b-4 border-amber-500"
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
            className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.length > 0 ? (
              data
                .filter(
                  (item: LocalStorage) =>
                    category === "" || item.kategori === category
                )
                .map((item: LocalStorage, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start w-full gap-3 p-6 shadow-md cursor-pointer bg-slate-800 rounded-xl hover:scale-90 animate"
                    onClick={() => saveToLocalStorage(item)}
                  >
                    <img
                      src={item.thumbnail}
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

export default VideoListSection;
