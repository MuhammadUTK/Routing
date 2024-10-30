import React from 'react';
import { Outlet } from 'react-router-dom';
import {SecondNavbar, SecondSideBar} from "./";

function SecondLayout() {
    return (
        <div>
            <SecondNavbar />
            <div className="d-flex">
                <SecondSideBar />
                <div className="flex-grow-1 p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SecondLayout;