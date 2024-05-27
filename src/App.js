import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className=''>
     <Navbar />
     <div className="flex mt-16">
     <Sidebar />
     <Feed />
     </div>
    </div>
  );
}

export default App;
