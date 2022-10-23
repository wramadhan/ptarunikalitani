import Head from 'next/head'

const Header = ({ status }) => {
    return (
        <Head>
            <title>{status}</title>
            <meta
                name="Carbon Exchange"
                content="Carbon Exchange by Bank Rakyat Indonesia BRI"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Header