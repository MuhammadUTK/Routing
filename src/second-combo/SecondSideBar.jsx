import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function SecondSideBar() {
    // Array of sidebar items with additional fields
    const sidebarItems = [
        { label: 'Notifications', icon: '🏠', link: '/second' },
        { label: 'Settings', icon: '👤', link: '/second/another' },
        { label: 'Profile', icon: '⚙️', link: '/second' },
        { label: 'Messages', icon: '✉️', link: '/second/another' },
        { label: 'Dashboard', icon: '🔔', link: '/second' },
        { label: 'Help', icon: '❓', link: '/second/another' },
        { label: 'Switch to Mode 1', icon: '🚪', link: '/first' },
        { label: 'Switch to Mode 2', icon: '🚪', link: '/second' },
        // Add more items as needed
    ];

    return (
        <ul className="list-group">
            {sidebarItems.map((item, index) => (
                <li key={index} className="list-group-item">
                    <Link to={item.link} className="d-flex align-items-center">
                        <span className="me-2">{item.icon}</span> {/* Icon */}
                        {item.label} {/* Label */}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default SecondSideBar;
