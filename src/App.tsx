import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { store } from './store'

import { GlobalCss } from './styles'
import Home from './pages/Homes'
import PageFoods from './pages/Foods'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/foods/:id',
    element: <PageFoods />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </Provider>
  )
}

export default App
