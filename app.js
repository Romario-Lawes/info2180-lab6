window.onload = function() {
  "use strict";
  
    function init() {
      let xhr = new XMLHttpRequest();
      let response = "";
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          response = this.responseText;
        }
      };
      xhr.open("GET", "request.php?q=definition", true);
      xhr.send();
      
      document.getElementById('search-btn').addEventListener("click", function() {
        alert(response);
      });
  }

  init();
};