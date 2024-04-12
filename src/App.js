import "./App.css";
import Header from "./Component/Header/Header";
import Search from "./Component/Search/SearchLocation";
import Content from "./Component/Content/Content";
import Benefits from "./Component/Benefits/Benefits";
import Lists from "./Component/Lists/Lists";
import Testi from "./Component/Testi/Testi";
import Form from "./Component/Form/Form";
import Footer from "./Component/Footer/Footer";
import Active from "./Component/Lists/List";
function App() {
    return (
        <div className="max-w-[1550px] select-none">
            <Header />
            <Search />
            <Content />
            <Benefits />
            <Lists />
            <Active />
            <Testi />
            <Form />
            <Footer />
        </div>
    );
}

export default App;
