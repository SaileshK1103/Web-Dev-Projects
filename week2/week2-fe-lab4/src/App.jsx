import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div>
      {/* Passing the 'title' prop here */}
      <Header title="Welcome to React Lab" />
      <Sidebar />
      <Article />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;