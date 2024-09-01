
fetch('Nav.html').then(response => response.text()).then(data=> {
    document.getElementById('nav-placeholder').innerHTML = data;
  
    let toggleMenu = document.querySelector(".menuButtons");
    toggleMenu.style.maxHeight = "0px";
  
    function togglenav() {
      if (toggleMenu.style.maxHeight == "0px") {
          toggleMenu.style.maxHeight = "300px";
      } else {
          toggleMenu.style.maxHeight = "0px";
      }
    }
  
    document.querySelector('.toggle').addEventListener('click', togglenav);
    document.querySelectorAll('.navButton').forEach(button => {
      button.addEventListener('click', function(){
        AssignActive(this.classList[1]);
      })   
    });
  
    function AssignActive(navClicked) {
      const activeButton = document.getElementById('active');
      const checkNavClicked = document.getElementsByClassName(navClicked)[0];
  
      if (checkNavClicked) {
          if (activeButton) {
              activeButton.removeAttribute('id');
              const activeHr = document.querySelector('#selectedNav');
              if (activeHr) {
                  activeHr.remove();
              }
          }
  
          if (checkNavClicked.id === 'active') {
              checkNavClicked.removeAttribute('id');
          } else {
              const selected = document.createElement('hr');
              selected.id = 'selectedNav';
              checkNavClicked.appendChild(selected);
              checkNavClicked.id = 'active';
          }
      }
    }
  
     const currentPage = window.location.pathname.split("/").pop();
      switch (currentPage) {
        case 'index.html':
          AssignActive('Nav1');
          break;
        case 'achievements.html':
          AssignActive('Nav2');
          break;
        case 'interests.html':
          AssignActive('Nav3');
          break;
        case 'certificates.html':
          AssignActive('Nav4');
          break;
        case 'projects.html':
          AssignActive('Nav5');
          break;
        default:
          AssignActive('Nav1'); // Default to Home
      }
  });
  
  
  