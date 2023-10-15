import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";

function App() {

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-4 pt-6">
        <Header />
        <AppRouter />
      </main>
      <Footer />
    </div>

    </>
  )
}

export default App
