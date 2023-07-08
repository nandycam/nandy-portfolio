import '@/styles/globals.css';
import  "@/styles/Home.css";
import "@/styles/About.css";
import "@/styles/Service.css";
import "@/styles/Potfolio.css";
import "@/styles/Navbar.css";
import "@/styles/Blog.css";
import "@/styles/Contact.css";
import Layout from '../../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ); 
}
