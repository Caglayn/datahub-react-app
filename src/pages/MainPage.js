import React from 'react';
import QueryTool from "../components/QueryTool";
import BasicTable from "../tables/BasicTable";
import Navbar from "../container/Navbar";

const MainPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mt-5 pt-5">
                <QueryTool/>
                <BasicTable/>
            </div>
        </div>
    );
};

export default MainPage;