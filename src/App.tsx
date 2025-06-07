// import { Button } from "@/components/ui/button"
import {BrowserRouter} from 'react-router-dom';
import Layout from "./components/layout"
import {ThemeProvider} from "./components/context/theme-provider"

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark">
      <Layout> hello </Layout>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App