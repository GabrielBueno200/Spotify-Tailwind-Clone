import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Content from './components/Content'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <Header />
          <Content />
        </main>
      </div>

      <Player />
    </div>
  )
}
