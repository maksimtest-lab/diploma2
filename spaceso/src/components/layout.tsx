import "./layout.sass"
import { Header } from "./header/header"
import PageTitle from "../store/components/pageTitle"
import ThemeSwitcher from "../store/components/themeSwitcher"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import { Breadcrumbs } from "./breadcrumbs"

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    const theme = useSelector((state: RootState) => state.ui.theme)

  return (
    <div className={`layout ${theme}`}>
      <Header />
      <main>
        <Breadcrumbs />
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
