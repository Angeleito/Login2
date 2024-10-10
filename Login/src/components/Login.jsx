import { useState } from "react";
import Fondo from "../assets/fondo1.png";
import appFirebase from "../Credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
  const [registrer, setRegistrer] = useState(false);

  const funAunteti = async(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(registrer){
      try{
        await createUserWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      }catch(error){
        alert("Contrasena o correo invalidos")
      }
    }else{
      try{
        await signInWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      }catch(error){
        alert("Contrasena o correo invalidos")
      }
    }
  }


  const styles = {
    div1: "w-[45%] h-[60%] flex flex-col gap-5 justify-center items-center z-10 rounded-[50px] bg-gradient-to-b from-sky-400 to-transparent to-50% shadow-2xl",
    form: "flex flex-col gap-5 items-center",
    inputs:
      "border-solid border-2 border-sky-300 rounded-lg px-5 w-[250px] focus:outline focus:outline-4 focus:outline-blue-200 shadow-2xl focus:shadow-blue-200 focus:border-none",
  };
  return (
    <main className="flex items-center justify-center gap-5 bg-gray-400 w-full h-screen">
      <div className={styles.div1}>
        <form action="" className={styles.form} onSubmit={funAunteti}>
          <h1 className="text-2xl text-white">
            {registrer ? "Registrate" : "Login"}
          </h1>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Ingresa tu correo"
            className={styles.inputs}
          />
          <input
            type="password"
            name=""
            id="password"
            placeholder="Ingresa tu contrasena"
            className={styles.inputs}
          />
          <button className="w-[50%] h-[45px] bg-cyan-200 rounded-xl hover:bg-cyan-300 text-gray-400">
            {registrer ? "Registrate" : "Incia sesion"}
          </button>
        </form>
        <h4 className="text-white">
          {registrer ? "Si ya tienes cuenta: " : "No tienes cuenta: "}
          <button
            onClick={() => setRegistrer(!registrer)}
            className="w-[120px] h-[40px] rounded-xl bg-green-300 hover:bg-green-400 text-gray-400"
          >
            {registrer ? "Inicia sesion" : "Registrate"}
          </button>
        </h4>
      </div>
      <div className="bg-gray-600 w-full h-screen absolute">
        <img src={Fondo} alt="" className="w-full h-screen" />
      </div>
    </main>
  );
};

export default Login;
