import Header from '../component/header';
import Footer from '../component/footer';
import Head from 'next/head';

const Layout = (props) => (

    <div>
        <Head>
        <link rel="stylesheet" href="css/design.css" />
        </Head>
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout;