/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv } from 'uuid';
import { appRoutes } from 'src/routes/config';
import ThemeProvider from 'src/theme';
import DashboardLayout from 'src/layouts/dashboard';
import { Route, Routes} from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import HomeLayout from './layouts/home';

const LoginPage = lazy(() => import('src/pages/login'));
const Page404 = lazy(() => import('src/pages/page-not-found'));
const Home = lazy(()=> import('src/pages/Home'));
// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <ThemeProvider>

      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<LoginPage /> } />
        <Route
          path="/app/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {userInfo !== null
            ? appRoutes?.map((route) => (
              <Route
                key={uuidv()}
                path={route.path}
                element={<ProtectedRoute>{route.element}</ProtectedRoute>}
              />
            ))
            : null}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </ThemeProvider>
  );
}
