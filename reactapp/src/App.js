import scan from '../src/scan.png';
import vaccine from '../src/vaccine.png';
import news from '../src/news.png';
import login from '../src/admin.png';

import './App.css';


function App() {
  return (
    <html>
      <div className="App">
        <div class="topnav">
              <a href="app.js"><img alt="scan" src={scan}/> Home</a>
              <a href="#index.html" target="_blank"><img alt="adminLogin" src={login}/> Admin Login</a>
              <a href="#index.html" target="_blank"><img alt="vaccine"src={vaccine}/> Vaccine Finder</a>
              <a href="#index.html" target="_blank"><img alt="news" src={news}/> News</a> 
            </div>
        <header className="App-header">
          <head>
            <meta charset="UTF-8"/>
            <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
            <meta content="width=device-width,initial-scale=1" name="viewport"/>
            <link rel="shortcut icon" type="image/png" href="tempslogo.png"/>
            <meta name="google" content="notranslate"/>
          </head>
          <body>	
            <div class="buttons">
                <a href="index.html" class="myButton" target="_blank">EMPLOYEE</a>
                <br />
                <a href="index.html" class="myButton2" target="_blank">GUEST</a>
            </div>
	<div>
	<br/>
	<br/>
	</div>
</body>
</header>
</div>
<footer class="style1">&copy; All reserved by Temps Company</footer>
</html>

  );
}

export default App;
