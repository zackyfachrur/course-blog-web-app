import Thumb from "/thumbnail/video-thumb-4.jpg";
import { useEffect, useState } from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { editVideo, deleteVideo } from "@store/VideoAsyncThunk";
import { AppDispatch } from "@store/Store";
import { DeleteValidation } from "./components/ServiceComponent";
import { LabelType } from "@type/LabelType";

const Label: React.FC<LabelType> = ({ content, target }) => {
  return (
    <label htmlFor={target} className="text-2xl font-semibold">
      {content}
    </label>
  );
};

const EditPostingans = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [judul, setJudul] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [kategori, setKategori] = useState<string>("");
  const [harga, setHarga] = useState<string>("");
  const [id, setID] = useState<string>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setID(localStorage.getItem("ID") ?? "");
    setJudul(localStorage.getItem("Judul") ?? "");
    setDeskripsi(localStorage.getItem("Deskripsi") ?? "");
    setKategori(localStorage.getItem("Kategori") ?? "");
    setHarga(localStorage.getItem("Harga") ?? "");
  }, []);

  const updateData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    dispatch(
      editVideo({
        id: id ?? undefined,
        judul: judul ?? "",
        deskripsi: deskripsi ?? "",
        kategori: kategori ?? "",
        harga: harga ?? "",
      })
    );

    setTimeout(() => {
      window.location.assign("/");
    }, 1000);
  };

  const deleteData = () => {
    dispatch(deleteVideo(id ?? ""));
    setShowDelete(false);

    setTimeout(() => {
      window.location.assign("/");
    }, 500);
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
          onSubmit={() => updateData}
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

            <h2 className="mt-4 text-2xl font-semibold">Kategori Materi</h2>
            <div className="flex flex-row gap-2 mb-4">
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
              onAccept={deleteData}
            />
          )}
        </form>
      </div>
    </section>
  );
};

export default EditPostingans;
