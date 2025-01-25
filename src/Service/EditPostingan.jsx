/* eslint-disable react/prop-types */
import Thumb from "/thumbnail/video-thumb-4.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Label = ({ content, target }) => {
  return (
    <label htmlFor={target} className="text-2xl font-semibold">
      {content}
    </label>
  );
};

const DeleteValidation = ({ onCancel, onAccept }) => {
  return (
    <div className="absolute z-50 bg-white h-[50%] drop-shadow-md rounded-3xl w-[50%] flex justify-center items-center flex-col gap-4">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold">Delete Data</h2>
        <p>Are you sure want to delete data?</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-green-500 px-5 py-2 rounded-xl text-white font-bold hover:bg-green-600"
          onClick={onAccept}
        >
          Yes
        </button>
        <button
          className="bg-red-500 px-5 py-2 rounded-xl text-white font-bold hover:bg-red-600"
          onClick={onCancel}
        >
          No
        </button>
      </div>
    </div>
  );
};

const EditPostingans = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setJudul(localStorage.getItem("Judul"));
    setDeskripsi(localStorage.getItem("Deskripsi"));
    setKategori(localStorage.getItem("Kategori"));
    setHarga(localStorage.getItem("Harga"));
  }, []);

  const getData = () => {
    axios
      .get("https://6793cb9d5eae7e5c4d8fead7.mockapi.io/api/article")
      .then((response) => console.log(response.data));
  };

  const deleteData = (id) => {
    axios
      .delete(`https://6793cb9d5eae7e5c4d8fead7.mockapi.io/api/article/${id}`)
      .then(() => {
        getData();
        setShowDelete(false); // Menutup modal setelah delete berhasil
      });

    setTimeout(() => {
      window.location.assign("/");
    }, 500);
  };

  const updateData = (e) => {
    e.preventDefault();
    axios.put(`https://6793cb9d5eae7e5c4d8fead7.mockapi.io/api/article/${id}`, {
      judul,
      deskripsi,
      kategori,
      harga,
    });
  };

  return (
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
          onSubmit={updateData}
        >
          <h2 className="text-4xl font-bold text-black">Buat Postingan</h2>
          <div className="flex flex-col items-start justify-start w-full h-full mt-12">
            <Label content="Judul Postingan" target="judulPostingan" />
            <input
              type="text"
              id="judulPostingan"
              placeholder="Judul untuk Pembelajaran"
              value={judul}
              className="w-full py-2 bg-white border-b-2 outline-none text-md"
              onChange={(e) => setJudul(e.target.value)}
            />
            <Label content="Deskripsi Postingan" target="deskripsiPostingan" />
            <input
              type="text"
              id="deskripsiPostingan"
              value={deskripsi}
              placeholder="Contoh : Pembelajaran Berbasis Web"
              className="w-full py-2 bg-white border-b-2 outline-none text-md"
              onChange={(e) => setDeskripsi(e.target.value)}
            />

            <h2 className="text-2xl font-semibold mt-4">Kategori Materi</h2>
            <div className="flex flex-row mb-4 gap-2">
              <ul className="flex gap-2">
                {["pemasaran", "pengembanganDiri", "desain", "bisnis"].map(
                  (cat) => (
                    <li
                      key={cat}
                      className={`px-2 py-1 border ${
                        kategori === cat ? "border-yellow-400" : ""
                      } rounded-md cursor-pointer`}
                      onClick={() => setKategori(cat)}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </li>
                  )
                )}
              </ul>
            </div>

            <Label content="Harga Materi" target="hargaMateri" />
            <input
              type="text"
              id="hargaMateri"
              value={harga}
              placeholder="Contoh : 200000"
              className="w-full py-2 bg-white border-b-2 outline-none text-md"
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>

          <button
            className="w-full px-5 py-2 mt-2 text-white bg-yellow-400 rounded-xl"
            type="submit"
            onClick={() =>
              setTimeout(() => {
                window.location.assign("/");
              }, 1000)
            }
          >
            Edit Data
          </button>
          <button
            className="w-full px-5 py-2 mt-2 text-white bg-red-500 rounded-xl"
            type="button"
            onClick={() => setShowDelete(true)}
          >
            Delete Data
          </button>

          {showDelete && (
            <DeleteValidation
              onCancel={() => setShowDelete(false)}
              onAccept={() => deleteData(id)}
            />
          )}
        </form>
      </div>
    </section>
  );
};

export default EditPostingans;
