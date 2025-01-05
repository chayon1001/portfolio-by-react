import React from 'react';

import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';


const MainLayouts = () => {
    return (
        <div className="bg-gradient-to-br from-[#1a0033] via-[#4b007d] to-[#240a2f] min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayouts;
