import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Content from './components/Content'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen">
        <Sidebar />

        <main className="flex flex-col flex-1 pt-6 pl-6">
          <Header />
          <Content />
        </main>
      </div>

      <Player />
    </div >
  )
}
