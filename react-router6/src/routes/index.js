import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/Home/News';
import Message from '../pages/Home/Message';
import Detail from '../pages/Home/News/Detail';

const routes = [
  {
    path: '/home',
    element: <Home />,
    children: [
      { 
        path: 'news', 
        element: <News /> ,
        children: [
          // params传参
          // { path: 'detail/:id/:title', element: <Detail /> }


          //search 传参
          { path: 'detail', element: <Detail /> }
        ]
      },
      { path: 'message', element: <Message /> }
    ],
  },
  { path: '/about', element: <About /> },
  { path: '/', element: <Navigate to="/home" /> },
];

export default routes;
