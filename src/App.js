import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/TableComp/Table' 

function App() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Search />
        <Table />
      </div>
    </>
  );
}

export default App;
