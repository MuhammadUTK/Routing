import {FirstAnotherMain, FirstMain, FirstLayout} from "./first-combo"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Define the routes
const router = createBrowserRouter([
    {
        element: <FirstLayout />, // Apply Layout to all nested routes
        children: [
            { path: '/', element: <FirstMain /> },
            { path: '/profile', element: <FirstAnotherMain /> },
            // Add more routes as needed
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
