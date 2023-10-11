import { ArticleContainer } from "./components/ArticleContainer"
import { ArticleDetail } from "./components/ArticleDetail"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { AppRouter } from "./router/AppRouter"

function App() {

  return (
    <>
    <main className="px-4 pt-6">
      <Header />
      <div className="lg:flex lg:gap-8">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer />
      <AppRouter />
      {/* <ArticleDetail /> */}
    </main>
    <Footer />
    </>
  )
}

export default App
