function changeColor() {
    const changeColorBtn = document.querySelector('#boton');
    const mySection = document.querySelectorAll('section');
    const myHeader = document.querySelector('#head')
    const mynav = document.querySelectorAll('a')
    const button = document.querySelector('#boton')

    changeColorBtn.addEventListener('click', () => {
    if (changeColorBtn.classList.contains('active')) {
    // revert to original colors
    document.body.style.backgroundImage = 'url("src/fondo.jpg")';
    for (const section of mySection) {
        section.style.background = '#DEE7EB';
        section.style.color = 'black';
        section.style.fontFamily = 'Verdana';
      }
    myHeader.style.background = '#333'
    for (var i = 0; i < mynav.length; i++)  {
        mynav[i].style.color = '#fff';
        mynav[i].style.fontFamily = 'Verdana'
      }
    mynav.forEach(nav => {
        nav.addEventListener('mouseover', () => {
            nav.style.color = '#96b0bb';
        });
        nav.addEventListener('mouseout', () => {
            nav.style.color = '#fff';
        });
        
    });
    button.style.background = '#333'
    button.style.fontFamily = 'Verdana'
    button.style.color = 'white'
    button.addEventListener('mouseover', () => {
        button.style.color = '#96b0bb';
      });
      
      button.addEventListener('mouseout', () => {
        button.style.color = '#fff';
      })
    changeColorBtn.classList.remove('active');
    changeColorBtn.textContent = 'Raul Tarufetti';
  } else {
    // change colors
    document.body.style.backgroundImage = 'url("src/black.jpg")';
    for (const section of mySection) {
        section.style.background = 'black';
        section.style.color = 'green';
        section.style.fontFamily = 'Greenscr';
      }
      myHeader.style.background = 'black'
      for (var i = 0; i < mynav.length; i++) {
        mynav[i].style.color = 'green';
        mynav[i].style.fontFamily = 'Greenscr'
    }
    mynav.forEach(nav => {
        nav.addEventListener('mouseover', () => {
            nav.style.color = '#0df805';
        });
        nav.addEventListener('mouseout', () => {
            nav.style.color = 'green';
        });
    })
    button.style.background = 'black'
    button.style.fontFamily = 'Greenscr'
    button.style.color = 'green'
    button.addEventListener('mouseover', () => {
        button.style.color = '#0df805';
      });   
      button.addEventListener('mouseout', () => {
        button.style.color = 'green';
      });
    changeColorBtn.classList.add('active');
    changeColorBtn.textContent = 'Raul Tarufetti';

  }
});
  }