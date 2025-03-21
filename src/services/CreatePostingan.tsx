import Thumb from "/thumbnail/video-thumb-4.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "../store/VideoAsyncThunk";
import { AppDispatch } from "@store/Store";
import { Video } from "@type/StoreType";
import { Label } from "./components/ServiceComponent";

const CreatePostingans = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const postData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newVideo: Video = {
      judul,
      deskripsi,
      thumbnail,
      kategori,
      harga,
    };

    dispatch(addVideo(newVideo));

    setTimeout(() => {
      window.location.assign("/");
    }, 500);
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
            onSubmit={() => postData}
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
              <Label content="Upload Thumbnail" target="thumbnailPostingan" />
              <input
                type="file"
                accept="image/png, image/jpeg, image/svg, image/jpg"
                id="thumbnailPostingan"
                className="w-full py-2 bg-white border-b-2 outline-none text-md"
                onChange={(e) => setThumbnail(e.target.value)}
              />
              {/* End Input */}

              {/* Radio Wrapper */}
              <h2 className="mt-4 text-2xl font-semibold">Kategori Materi</h2>
              <div className="flex flex-row gap-2 mb-4">
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
