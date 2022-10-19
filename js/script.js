const menu = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.menu__icon');
const closeBtn = document.querySelector('.close-burger-btn');

const body = document.body;

if(menu && menuBtn) {
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('_active');
        menuBtn.classList.toggle('_active');
    });
}

// if(closeBtn && menuBtn) {
//     closeBtn.addEventListener('click', () =>{
//         menu.classList.remove('_active');
//         menuBtn.classList.remove('_active');
//     });
// }
document.querySelector('.discount-input').addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)

// const myCity = {
//     city: 'Kyiv',
//     cityGreeting() {
//         console.log('Greetings!');
//     }
    
// }
// myCity.cityGreeting();
