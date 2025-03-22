import RegisterForm from "./components/RegisterForm";
import BaxaricLogo from "/Bxaric-Logo.png";

const RegisterSection = () => {
  return (
    <section className="flex flex-row-reverse items-center justify-around h-[100vh]">
      <div className="bg-gray-800 h-full w-[50%] flex justify-center items-center">
        <div className="bg-gray-700 flex-col w-[70%] h-[50%] flex gap-4 justify-center items-center rounded-xl px-24">
          <img src={BaxaricLogo} alt="Baxaric Icon" className="w-[400px]" />
          <p>
            50+ mahasiswa telah bergabung dengan{" "}
            <span className="text-amber-400 font-bold italic">
              Baxaric Course
            </span>
            <br />
            ini saatnya untuk kamu mendapatkan alur belajarmu disini.
          </p>
          <hr className="w-full text-" />
          <button className="bg-white px-8 py-2 w-full text-slate-800 rounded-xl font-bold">
            Konsultasi Gratis
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[50%] justify-center items-center h-full bg-slate-800">
        <div className="flex flex-col gap-1">
          <h2 className="text-5xl font-bold">Mulai Belajar Hari Ini!</h2>
          <p>
            bergabung dengan{" "}
            <span className="text-amber-400 font-bold italic">
              Baxaric Course
            </span>{" "}
            bersama mahasiswa lainnya.
          </p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterSection;
