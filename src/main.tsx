import React from 'react'
import ReactDOM from 'react-dom/client'

import { InstructorApp } from './component/InstructorApp.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RouteErrorPage } from './component/RouteErrorPage.tsx';
import { CourseDetail } from './component/CourseDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InstructorApp/>,
    errorElement: <RouteErrorPage/>
  },
  {
    path: "courses",
    element: <InstructorApp/>
  },
  {
    path: "courses/:id",
    element: <CourseDetail/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
