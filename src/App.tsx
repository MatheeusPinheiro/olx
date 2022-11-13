import { MainRoutes } from "./routes/MainRoutes";
import { Template } from './components/MainComponents';
import { Header } from "./components/partials/Header";
import { Footer } from "./components/partials/Footer";
import './App.css';

const App = () => {

  return (
    <Template>
      <Header/>
      <MainRoutes />
      <Footer />
    </Template>
  );
}


export default App;