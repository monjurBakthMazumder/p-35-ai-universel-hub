import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import AllAi from './Component/Page/AllAi/AllAi';
import AiDetails from './Component/Page/AiDetails/AiDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:'/',
        loader: ()=> fetch (`https://openapi.programming-hero.com/api/ai/tools`),
        element: <AllAi/>
      },
      {
        path:'/:id',
        loader: ({params})=> fetch (`https://openapi.programming-hero.com/api/ai/tool/${params.id}`),
        element: <AiDetails/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
