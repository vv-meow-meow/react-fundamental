import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router';

const AppRouter = () => {
  const isAuth = true;
  return (<Routes>
    {isAuth ? (<>
      {privateRoutes.map(route => <Route key={route.path}
                                         path={route.path}
                                         element={route.element}
      />)}
      <Route path="*" element={<Navigate to="/posts"/>}/>
    </>) : (<>
          {publicRoutes.map(route => <Route key={route.path}
                                            path={route.path}
                                            element={route.element}
          />)}
          <Route path="*" element={<Navigate to="/login"/>}/>
        </>

    )}
  </Routes>);
};

export default AppRouter;