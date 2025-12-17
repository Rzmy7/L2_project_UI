import Sidebar from './components/SideBar.tsx';
import ReviewsHeader from './components/ReviewHeaderTop.tsx'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        {/* The Header sits at the top of the main content */}
        <ReviewsHeader />

        {/* The rest of your page content will go here later */}
        <div className="content-area">
          {/* We will add the review cards here later */}
        </div> 
      </main>
    </div>
  );
}

export default App;