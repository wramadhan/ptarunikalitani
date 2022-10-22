import Head from "next/head";
import Registercomp from "../components/registerComp";

export default function Register() {

    return (
        <div>
            <Head>
                <title>Register</title>
                <meta name="Carbon Exchange" content="Carbon Exchange by Bank Rakyat Indonesia BRI" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Registercomp />
        </div>
    );
}
