import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

export default function App() {
  const router = useRoutes(routes);
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/*  end 属性 子路由点亮的时候 父路由不亮  */}
            <MyNavLink to="/home" end>Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {router}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
