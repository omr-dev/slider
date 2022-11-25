import styles from './App.module.css';
import Body from './components/body/Body';
import Header from './components/header/Header';

function App() {

    return (
        <div className={styles.App}>
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
