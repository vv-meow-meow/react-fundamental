import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes} from '../router';
import {AuthContext} from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

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