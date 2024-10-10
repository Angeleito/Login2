import appFirebas from "../Credenciales";
import { getAuth, signOut } from "firebase/auth";
import Dashboard from "../pages/Dashboard";
const auth = getAuth(appFirebas);


const Home = ({emailUser}) => {
  return (
    <>
        <div className="bg-gray-700 shadow-2xl shadow-gray-700 w-40 h-20 absolute z-10 flex items-center rounded-xl translate-y-2">
          <h1 className="absolute z-10 w-10 text-white text-lg">Bienvenido {emailUser}</h1>
        </div>
        <Dashboard/>
        <button
          className="w-[120px] h-[40px] flex bg-gray-600 dark:bg-gray-800 text-white rounded-xl translate-x-2 justify-center items-center absolute -translate-y-12"
          onClick={() => signOut(auth)}
        >
          Cerra sesion
        </button>
    </>
  );
};

export default Home;
