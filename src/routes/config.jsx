import { lazy } from 'react';

const IndexPage = lazy(() => import('src/pages/app'));
const BlogPage = lazy(() => import('src/pages/blog'));
const EmailPage = lazy(() => import('src/pages/email'));
// const ProductsPage = lazy(() => import('src/pages/products'));
const Category = lazy(() => import('src/pages/category'));
// const SubCategory = lazy(() => import('src/pages/subcategory'));
const SellerPage = lazy(() => import('src/pages/Seller'));
export const appRoutes = [
  { group: 'Dashboard', title: 'Dashboard', path: '/', element: <IndexPage /> },
  {
    group: 'Dashboard',
    path: 'email',
    title: 'Email',
    element: <EmailPage />,
  },
  {
    group: 'Dashboard',
    path: 'lead',
    title: 'Lead',
    element: <SellerPage />,
  },
  {
    group: 'Dashboard',
    title: 'Automation',
    path: 'automation',
    element: <Category />,
  },
  // {
  //   group: 'Dashboard',
  //   title: 'SubCategory',
  //   path: 'sub-category',
  //   element: <SubCategory />,
  // },
  // {
  //   group: 'Dashboard',
  //   title: 'products',
  //   path: 'products',
  //   element: <ProductsPage />,
  // },
  {
    group: 'Dashboard',
    title: 'blog',
    path: 'blog',
    element: <BlogPage />,
  },
];
