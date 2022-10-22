import Inputlogin from "./inputlogin";
import Sideimg from './sideimg';
import Button from './button';
import Link from 'next/link'
import Toplogin from './toplogin';
import Regisloc from './regisloc';

const Registercomp = () => {
    const handleRegister = () => {
        router.push({
            pathname: "/",
        });
    };
    return (
        <main className="md:flex h-full w-full">
            <Sideimg />

            <div className="hp:px-0 px-6 w-full pt-16 md:w-1/2">
                <Toplogin
                    title="Register"
                    desc="Please enter your account details to sign up"
                />
                <Inputlogin type="text" label="Username or ID" placeholder="Enter your username or ID" />
                <Inputlogin type="password" label="Password" placeholder="Enter your password" />
                <Inputlogin type="email" label="Email" placeholder="Enter your email" />
                <Inputlogin type="number" label="Phone Number" placeholder="Enter your phone number" />
                <Inputlogin type="number" label="Identity Number" placeholder="Enter your identity number" />
                <Inputlogin type="number" label="BRI Account Number" placeholder="Account Number" />
                <div className="w-full hp:w-[432px] mx-auto mt-1.5">
                    <h2 className="text-[#929393]">
                        Make sure the account number is active
                    </h2>
                </div>
                <Regisloc />
                <Button value="Sign Up" />
                <p className="text-secondary text-center">
                    Already have an account??{" "}
                    <Link href="/"><button
                        className="font-semibold hover:text-secondary/70 active:text-secondary/70"
                    >
                        Sign In
                    </button></Link>
                </p>
            </div>
        </main >
    )
}

export default Registercomp