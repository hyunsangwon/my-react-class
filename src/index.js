import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.js';
import Menu1 from './components_0607/Navbar/Menu1.js';
import Menu2 from './components_0607/Navbar/Menu2.js';
import Menu3 from './components_0607/Navbar/Menu3.js';
import ErrorPage from './ErrorPage.js';
import { worker } from './components_0611/mocks/worker.js';
worker.start();
//ReactDOM(Document Object Model)은 VirtualDOM이라고 함.
//기존 페이지는 변경된 데이터가 있을 때 화면 전체를 랜더링 함.
//렌더링이란 -> 브라우저에 우리가 만든 html,css,js를 보여주는 작업을 의미
//페이지에 데이터가 많아질수록 기존 페이지는 느려질 수 밖에 없음.  -> 리엑트 가상돔은 이 문제를 변경된 부분만 렌더링 함.

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/menu1',
    element: <Menu1 />,
  },
  {
    path: '/menu2',
    element: <Menu2 />,
  },
  {
    path: '/menu3',
    element: <Menu3 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//StrictMode은 개발자가 빠른 에러를 해결할 수 있도록 검사와 경고메세지를 전달합니다.
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
