import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import Imagemback from "../Imagemback/Imagemback";
import Tabeladeprecos from "../../Components/Tabeladeprecos/Tabeladeprecos";
import Botaoofertas from "../../Components/Btotaoofertas/Botaoofertas";
import Quemsomos from "../Quemsomos/Quemsomos";

function Home(){
    return (
        <>
            <Navbar/> 
            <Imagemback/>
            <Cards/>
            <Tabeladeprecos/>
            <Botaoofertas/>
            <Quemsomos/>
            <Footer/>
        </>
    );
}
export default Home;