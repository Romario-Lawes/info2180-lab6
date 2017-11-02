window.onload = function() {
  "use strict";
  
  function init() {
    let xhr = new XMLHttpRequest();
    
    document.getElementById('search-btn').addEventListener("click", function() {
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          document.getElementById('result').innerHTML = this.responseText;
        }
      };
      xhr.open("GET", "request.php?q=" + document.getElementById('search-field').value, true);
      xhr.send();
    });
    
    document.getElementById('all-btn').addEventListener("click", function() {
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          let xmlOutput = "<ol>";
          let xmlData = this.responseXML.getElementsByTagName('definition');
          for (let i = 0; i < xmlData.length; i++) {
            xmlOutput += "<li><h3>" + xmlData[i].getAttribute('name').toUpperCase() + "</h3>" + 
                         "<p>" + xmlData[i].textContent + "</p>" + 
                         "<p id='author'> - " + xmlData[i].getAttribute('author') + "</p></li>" + "<br>";
          }
          xmlOutput += "</ol>";
          document.getElementById('result').innerHTML = xmlOutput;
        }
      };
      xhr.open("GET", "request.php?q=all=true", true);
      xhr.send();
    });
  }

  init();
};