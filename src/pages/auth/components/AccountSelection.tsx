const AccountSelection = () => {
  return (
    <>
      <button
        type="submit"
        className="w-full py-3 bg-white text-slate-800 font-bold rounded-xl hover:bg-gray-200 cursor-pointer mt-2"
      >
        Daftar Akun
      </button>
      <div className="flex flex-row items-center justify-center w-full">
        <hr className="w-full text-gray-400" />
        <p className="w-full text-center text-gray-400 font-semibold">
          Or continue with
        </p>
        <hr className="w-full text-gray-400" />
      </div>
      <div className="flex gap-2 font-semibold">
        <button className="px-5 py-2 border-2 border-gray-600 rounded-lg w-full cursor-pointer hover:bg-white hover:text-slate-800">
          <i className="ri-google-fill"></i> Google
        </button>
        <button className="px-5 py-2 border-2 border-gray-600 rounded-lg w-full cursor-pointer hover:bg-white hover:text-slate-800">
          <i className="ri-github-fill"></i> Github
        </button>
      </div>
      <h3 className="self-center">
        Already have an account ?{" "}
        <a href="/auth/login" className="font-bold">
          Sign in
        </a>
      </h3>
    </>
  );
};

export default AccountSelection;
