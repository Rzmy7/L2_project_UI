import Sidebar from './components/SideBar.tsx';
import ReviewsHeader from './components/ReviewHeaderTop.tsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      
      <main className="main-content">
        {/* 1. HEADER: Full width (No padding around it) */}
        <ReviewsHeader />

        {/* 2. CONTENT AREA: This has the padding */}
        <div className="content-area">
          {/* Your review cards will go here later */}
          <p>Review cards will load here...</p>
        </div>
      </main>
    </div>
  );
}

export default App;