// src/routes/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../ui/pages/HomePage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
]);

export default router;
