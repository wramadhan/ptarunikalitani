import Link from "next/link"
import Button from "./button"
import Inputlogin from "./inputlogin"
import Sideimg from "./sideimg"
import Toplogin from "./toplogin"

const Logincomp = ({ handleFill, wrongPass, wrong, handleFillPass, handleLogin }) => {
    return (
        <main className="flex">
            <Sideimg />
            <div className="hp:px-0 px-6 w-full pt-16 md:w-1/2">
                <Toplogin
                    title="Welcome Back!"
                    desc="Please enter your account details to sign in"
                />

                <Inputlogin
                    handleFill={handleFill}
                    wrong={wrong}
                    type="text"
                    label="Username or ID"
                    placeholder="Enter your username or ID"
                />
                {wrong ? (
                    <p className="text-[#E84040] mt-1.5">Username is invalid</p>
                ) : null}
                <Inputlogin
                    handleFill={handleFillPass}
                    wrong={wrongPass}
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                />
                {wrongPass ? (
                    <p className="text-[#E84040] mt-1.5">Password is invalid</p>
                ) : null}
                <div className="mt-8 flex">
                    <input
                        className="w-6 h-6 mr-2 border-[#B5B6B6]"
                        type="checkbox"
                        name="remember"
                    />
                    <label for="remember">Remember me</label>
                </div>
                <Button value="Sign In" klik={handleLogin} />
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
    )
}

export default Logincomp