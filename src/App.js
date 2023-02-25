import './App.css';
import Profile from './profile/profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Checkpoint React Props</h1>
        <Profile 
        fullName="Ahmed Hassiki" 
        bio="Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Praesent augue velit, molestie eu feugiat nec, 
        dignissim non leo. Aenean sed nisl dignissim, pulvinar justo mattis, interdum neque. 
        Nam mollis vehicula nisl sed tempus. Sed diam nisi, tempus eu suscipit quis, tempus nec orci. 
        Integer nibh eros, bibendum in justo sit amet, commodo pellentesque augue. Morbi molestie odio 
        et dictum dictum. Fusce vitae ipsum libero." 
        profession="Entrepreneur"/>
      </header>
    </div>  
  );
}

export default App;
