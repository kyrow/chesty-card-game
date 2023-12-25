import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/shared/styles/general.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IntroPage from './pages/intro';
import HubPage from './pages/hub';


const router = createBrowserRouter([
	{
		path: "/",
		element: <IntroPage />,
	},
	{
		path: "/hub",
		element: <HubPage />
	},
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
