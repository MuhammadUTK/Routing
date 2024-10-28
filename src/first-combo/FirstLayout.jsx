import React from 'react';
import { Outlet } from 'react-router-dom';
import {FirstSideBar} from './';
import {FirstNavbar} from './';

function FirstLayout({ children }) {
    return (
        <div>
            <FirstNavbar />
            <div className="d-flex">
                <FirstSideBar />
                <div className="flex-grow-1 p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default FirstLayout;