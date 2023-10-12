import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";

function App() {

  return (
    <>
    <main className="px-4 pt-6">
      <Header />
      <AppRouter />
    </main>
    <Footer />
    </>
  )
}

export default App
