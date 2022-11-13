import {useRoutes} from 'react-router-dom';

import { About } from '../pages/About';
import {Home} from '../pages/Home';
import {NotFound} from '../pages/NotFound';
import { Signin } from '../pages/Signin';

export const MainRoutes = () => {
	return useRoutes([
		{path: '/', element: <Home />},
		{path: '/sobre', element: <About />},
		{path: '*', element: <NotFound />  },
		{path: '/signin', element: <Signin />},
	]);
}