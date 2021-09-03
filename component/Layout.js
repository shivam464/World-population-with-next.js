import Head from "next/head"


const Layout = ({ children, title = "World Population Rank" }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="World Population" />
                <link rel="icon" href="../images/logo.png" />
            </Head>
            <main>{children}</main>

        </div>
    )
}

export default Layout
