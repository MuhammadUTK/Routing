import {FirstAnotherMain, FirstMain, FirstLayout} from "./first-combo"
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {SecondAnotherMain, SecondMain, SecondLayout} from "./second-combo"


// Define the routes
const router = createBrowserRouter([
    {
        element: <FirstLayout />, // Apply Layout to all nested routes
        children: [
            { path: '/first', element: <FirstMain /> },
            { path: '/first/another', element: <FirstAnotherMain /> },
            // Add more routes as needed
        ],
    },
    {
        element: <SecondLayout />, // Apply Layout to all nested routes
        children: [
            { path: '/second', element: <SecondMain /> },
            { path: '/second/another', element: <SecondAnotherMain /> },
            // Add more routes as needed
        ],
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
