/* eslint-disable react/prop-types */
import Thumb from "/thumbnail/video-thumb-4.jpg";
import { useState } from "react";
import axios from "axios";

const Label = ({ content, target }) => {
  return (
    <>
      <label htmlFor={target} className="text-2xl font-semibold">
        {content}
      </label>
    </>
  );
};

const CreatePostingans = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios.post("https://6793cb9d5eae7e5c4d8fead7.mockapi.io/api/article", {
      judul,
      deskripsi,
      kategori,
      harga,
    });
  };

  return (
    <>
      <section className="h-[100vh] flex flex-row">
        <img
          src={Thumb}
          alt="Image Thumbnail"
          className="w-[50vw] h-[100vh] object-cover"
        />
        <div className="flex items-center justify-center w-full">
          <form
            action="/"
            className="bg-white w-[80%] h-[60%] px-24 py-12 rounded-3xl drop-shadow-2xl flex justify-start flex-col items-center"
            onSubmit={postData}
          >
            <h2 className="text-4xl font-bold text-black">Buat Postingan</h2>
            <div className="flex flex-col items-start justify-start w-full h-full mt-12">
              {/* Input */}
              <Label content="Judul Postingan" target="judulPostingan" />
              <input
                type="text"
                id="judulPostingan"
                placeholder="Judul untuk Pembelajaran"
                className="w-full py-2 bg-white border-b-2 outline-none text-md"
                onChange={(e) => setJudul(e.target.value)}
              />
              <Label
                content="Deskripsi Postingan"
                target="deskripsiPostingan"
              />
              <input
                type="text"
                id="deskripsiPostingan"
                placeholder="Contoh : Pembelajaran Berbasis Web"
                className="w-full py-2 bg-white border-b-2 outline-none text-md"
                onChange={(e) => setDeskripsi(e.target.value)}
              />
              {/* End Input */}

              {/* Radio Wrapper */}
              <h2 className="text-2xl font-semibold mt-4">Kategori Materi</h2>
              <div className="flex flex-row mb-4 gap-2">
                <ul className="flex gap-2">
                  <li
                    className={
                      kategori === "pemasaran"
                        ? `px-2 py-1 border border-yellow-400 rounded-md cursor-pointer`
                        : `px-2 py-1 border rounded-md cursor-pointer`
                    }
                    onClick={() => setKategori("pemasaran")}
                  >
                    Pemasaran
                  </li>
                  <li
                    className={
                      kategori === "pengembanganDiri"
                        ? `px-2 py-1 border border-yellow-400 rounded-md cursor-pointer`
                        : `px-2 py-1 border rounded-md cursor-pointer`
                    }
                    onClick={() => setKategori("pengembanganDiri")}
                  >
                    Pengembangan Diri
                  </li>
                  <li
                    className={
                      kategori === "desain"
                        ? `px-2 py-1 border border-yellow-400 rounded-md cursor-pointer`
                        : `px-2 py-1 border rounded-md cursor-pointer`
                    }
                    onClick={() => setKategori("desain")}
                  >
                    Desain
                  </li>
                  <li
                    className={
                      kategori === "bisnis"
                        ? `px-2 py-1 border border-yellow-400 rounded-md cursor-pointer`
                        : `px-2 py-1 border rounded-md cursor-pointer`
                    }
                    onClick={() => setKategori("bisnis")}
                  >
                    Bisnis
                  </li>
                </ul>
              </div>
              {/* End Radio Wrapper */}

              {/* Input */}
              <Label content="Harga Materi" target="hargaMateri" />
              <input
                type="text"
                id="hargaMateri"
                placeholder="Contoh : 200000"
                className="w-full py-2 bg-white border-b-2 outline-none text-md"
                onChange={(e) => setHarga(e.target.value)}
              />
            </div>
            {/* End Input */}
            <button
              className="w-full px-5 py-2 mt-2 text-white bg-yellow-400 rounded-xl"
              type="submit"
              onClick={() =>
                setTimeout(() => {
                  window.location.assign("/");
                }, 1000)
              }
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePostingans;
