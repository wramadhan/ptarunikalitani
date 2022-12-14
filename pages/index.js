import { useState } from "react";
import Button from "../components/button";
import Inputlogin from "../components/inputlogin";
import Router, { useRouter } from "next/router";
import Toplogin from "../components/toplogin";
import Link from "next/link";
import Sideimglog from "../components/sideimglog";
import Header from "../components/header";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("admin");
  const [formName, setFormName] = useState();
  const [formPassword, setFormPassword] = useState();
  const [wrong, setWrong] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const handleLogin = () => {
    if (formPassword == undefined && formName == undefined) {
      setWrong(true);
      setWrongPass(true);
    } else if (formName == undefined) {
      setWrong(true);
    } else if (formPassword == undefined) {
      setWrongPass(true);
    } else if (formPassword.split("").length > 1 && formName == "admin") {
      Router.push({
        pathname: "/home",
      });
      console.log("lengkap");
    } else if (formPassword.split("").length <= 1 && formName !== "admin") {
      setWrong(true);
      setWrongPass(true);
    } else if (formPassword.split("").length <= 1 && formName == "admin") {
      setWrongPass(true);
    } else if (formPassword.split("").length <= 1 && formName == "admin") {
      setWrongPass(true);
    } else if (formName != "admin") {
      setWrong(true);
    }
  };

  const handleRegister = () => {
    router.push({
      pathname: "/register",
    });
  };
  const handleFill = (e) => {
    setFormName(e.target.value);
    setWrong(false);
  };
  const handleFillPass = (e) => {
    setFormPassword(e.target.value);
    setWrongPass(false);
  };
  return (
    <div>
      <Header status="Login" />

      <main className="flex">
        <Sideimglog />
        <div className="hpmax:px-6 w-full py-4 h-screen dxl:pt-16 md:w-1/2">
          <Toplogin
            title="Welcome Back!"
            desc="Please enter your account details to sign in"
          />

          <Inputlogin
            handleFill={(e) => handleFill(e)}
            wrong={wrong}
            type="text"
            label="Username or ID"
            placeholder="Enter your username or ID"
          />
          {wrong ? (
            <p className="text-[#E84040] mt-1.5 w-full hp:w-[432px] mx-auto">
              Username is invalid
            </p>
          ) : null}
          <Inputlogin
            handleFill={(e) => handleFillPass(e)}
            wrong={wrongPass}
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          {wrongPass ? (
            <p className="text-[#E84040] mt-1.5 w-full hp:w-[432px] mx-auto">
              Password is invalid
            </p>
          ) : null}
          <div className="mt-8 flex mx-auto w-full hp:w-[432px] justify-between">
            <div className="flex">
              <input
                className="w-6 h-6 mr-2 border-[#B5B6B6]"
                type="checkbox"
                name="remember"
              />
              <label for="remember">Remember me</label>
            </div>
            <button className="text-[#848484] font-semibold hover:text-[#848484]/50 active:text-[#848484]/50 ">
              Forgot Password
            </button>
          </div>
          <Button value="Sign In" link={() => handleLogin()} />
          <p className="text-secondary text-center">
            Don&apos;t have an account yet?{" "}
            <Link href="/register">
              <button className="font-semibold hover:text-secondary/70 active:text-secondary/70">
                Register
              </button>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
