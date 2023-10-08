import Header from "./components/Header";
import "./index.scss"
import Main from "./components/Main/Main";
import styles from './App.module.scss'
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
