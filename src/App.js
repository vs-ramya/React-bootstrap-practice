import ShapeExample from "./Images";
import About from "./About";
import Root from "./Root";
import Home from "./Home";
import ContactUsForm from "./ContactUs"; // Import the ContactUsForm component
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '',
        element: <ShapeExample />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Home',
        element: <Home />
      },
      {
        path: 'ContactUs', // Define the path for Contact Us page
        element: <ContactUsForm /> // Render the ContactUsForm component
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
