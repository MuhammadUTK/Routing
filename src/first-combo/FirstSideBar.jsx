import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function FirstSideBar() {
    // Array of sidebar items with additional fields
    const sidebarItems = [
        { label: 'Dashboard', icon: '🏠', link: '/' },
        { label: 'Profile', icon: '👤', link: '/profile' },
        { label: 'Settings', icon: '⚙️', link: '/settings' },
        { label: 'Messages', icon: '✉️', link: '/messages' },
        { label: 'Notifications', icon: '🔔', link: '/notifications' },
        { label: 'Help', icon: '❓', link: '/help' },
        { label: 'Sign Out', icon: '🚪', link: '/sign-out' },
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
