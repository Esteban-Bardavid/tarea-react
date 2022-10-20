import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
 

  return (
    <div className="body">

      <div className="header">
        <Header />
      </div>
      
  
      <div className="main">
        <Main />
      </div>
      
      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
