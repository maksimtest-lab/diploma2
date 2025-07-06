import "./layout.sass"
import { Header } from "./header/header"
import { Navigation } from "./navigation"
import PageTitle from "../store/components/pageTitle"

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {

  return (
    <div className="layout">
      <Header />
      <main>
        <PageTitle></PageTitle>
        <Navigation />

        {children}
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Spaceso. All rights reserved.</p>
      </footer>
    </div>
  )
}

export { Layout }
