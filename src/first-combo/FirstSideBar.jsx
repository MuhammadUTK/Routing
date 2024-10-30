import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function FirstSideBar() {
    // Array of sidebar items with additional fields
    const sidebarItems = [
        { label: 'Dashboard', icon: '🏠', link: '/first' },
        { label: 'Profile', icon: '👤', link: '/first/another' },
        { label: 'Settings', icon: '⚙️', link: '/first' },
        { label: 'Messages', icon: '✉️', link: '/first/another' },
        { label: 'Notifications', icon: '🔔', link: '/first' },
        { label: 'Help', icon: '❓', link: '/first/another' },
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

export default FirstSideBar;
