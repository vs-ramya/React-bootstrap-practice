import ShapeExample from "./Images";
//import Navigation from "./Navigation";
import About from "./About";
import Root from "./Root";
import Home from "./Home";

import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Cards from "./Card";


const Router=createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children:[
      {
        path:'',
        element:<ShapeExample/>
      },
      { 
        path:'About',
      element:<About/>
    },
    {
      path:'About',
      element:<Cards/>
    },
    {
      path:'Home',
      element:<Home/>
    },

    ],
    
  },

 
])
function App() {
  
  return (
    <>
    
    <RouterProvider router={Router}>
     
    </RouterProvider>
  </>
      
  );
}


export default App;

