import logo from '../src/scan.png';
import './App.css';
import { useState } from 'react/cjs/react.development';



function App() {
  return (
    <html>
      <div className="App">
        <div class="topnav">
              <a class="logo" href="app.js"><img src={logo}/> Home</a>
              <a href="#index.html" target="_blank">Admin Login</a>
              <a href="#index.html" target="_blank">Vaccine Finder</a>
              <a href="#index.html" target="_blank">News</a> 
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
