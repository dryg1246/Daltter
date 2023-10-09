import Header from "../pages/Header/Header";
import "../../index.scss"
import Main from "../pages/Main/Main";
import styles from './App.module.scss'
import Footer from "../pages/Footer/Footer";

function App() {
  return (
    <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
