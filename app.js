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
  }

  init();
};