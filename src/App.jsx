import { Provider } from "react-redux"
import Head from "./components/Head"
import AppStore from "./utils/appStore"
import { TbH6 } from "react-icons/tb"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SubBody from "./components/SubBody"
import MainBody from "./components/MainBody"
import Watch from "./components/Watch"


  const approuter = createBrowserRouter([{
    path: "/",
    element: <MainBody/>,
    children:[
      {
        path: "/",
        element: <SubBody/>
      },
      {
        path: "watch",
        element: <Watch/>
      }
    ]
  }])

function App() {  


  return (
   <div>
    <Provider store={AppStore}>
    <Head/>
    <RouterProvider router={approuter}/>
    </Provider>
   </div>
  )
}

export default App
