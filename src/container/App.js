import QueryTool from "../components/QueryTool";
import BasicTable from "../tables/BasicTable";
import Navbar from "./Navbar";


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mt-5 pt-5">
        <QueryTool/>
        <BasicTable/>
      </div>
    </div>
  );
}

export default App;