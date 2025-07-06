import "./layout.sass"
import { Header } from "./header/header"
import PageTitle from "../store/components/pageTitle"
import ThemeSwitcher from "../store/components/themeSwitcher"

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {

  return (
    <div className="layout">
      <Header />
      <main>
        <PageTitle></PageTitle>
        {children}
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Spaceso. All rights reserved.</p>
        <ThemeSwitcher />
      </footer>
    </div>
  )
}

export { Layout }
