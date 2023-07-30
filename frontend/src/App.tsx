import Header from "./components/Header"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
    <Header />
    <h1 className="text-3xl font-bold underline">Ilustrografia</h1>
    <Footer />
    </div>
  )
}
export default App