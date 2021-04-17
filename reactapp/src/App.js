import scan from '../src/scan.png';
import vaccine from '../src/vaccine.png';
import news from '../src/news.png';
import logout from '../src/admin.png';

import './App.css';

function App() {
  return (
          <div className="App">
            <header className="App-header">
               <div className="topnav">
                  <a href="app.js"><img alt="scan" src={scan}/> Home</a>
                  <a href="#index.html" target="_blank"><img alt="vaccine"src={vaccine}/> Vaccine Finder</a>
                  <a href="#index.html" target="_blank"><img alt="news" src={news}/> News</a>
                  <a href="logout.html" target="_blank"><img alt="logout" src={logout}/> Logout</a>
                </div>
              <div className="buttons">
                    <a href="Employee.html" class="myButton">EMPLOYEE</a>
                <br/>
                <a href="index.html" class="myButton2">GUEST</a>
              </div>
              
<footer className="style1">&copy; All reserved by Temps Company</footer>
</header>
</div>

  );
  
}

export default App;
