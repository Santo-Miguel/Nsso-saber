const header = document.querySelector('.header')

const IS_ACTIVE = 'is-active'
const SHOW = 'show'
const WITH_BACKGROUND = 'with__background'

let prevScrollPos = window.pageYOffset

window.onscroll = () => {
    const currentScrollPos = window.pageYOffset
    const halfScreenHeight = Math.floor(window.innerHeight / 2)

    if (currentScrollPos < halfScreenHeight) {
        header.classList.add(WITH_BACKGROUND)
    } else {
        header.classList.remove(WITH_BACKGROUND)
    }

    const HIDING = 'hiding'

    if (currentScrollPos < prevScrollPos) {
        header.classList.remove(SHOW)
        header.setAttribute('id', HIDING)

        setTimeout(() => {
            header.removeAttribute('id', HIDING)
        }, 900)
    } else {
        header.classList.add(SHOW)
    }

    prevScrollPos = currentScrollPos
}

const missons = document.querySelectorAll('.imagem-conteudo')
const misson = document.querySelectorAll('.misson')

const missionObserver = new IntersectionObserver(
    entries => {
        const ON_SCREEN = 'on__screen'
        entries.forEach(entry => {
            const { isIntersecting, target } = entry

            if (isIntersecting) {
                target.classList.add(ON_SCREEN)
                return true
            }

            target.classList.remove(ON_SCREEN)
        })
    },
    {
        threshold: 0,
    }
)

missons.forEach(misson => {
    missionObserver.observe(misson)
})
misson.forEach(misson => {
  missionObserver.observe(misson)
})
 
 
document.querySelector('.button').addEventListener('click', () => {
     document.querySelector('.sidebar').classList.toggle('isOpen');
     document.querySelector('.fechaMenu').classList.toggle('isClose');
     button.classList.toggle("clicked");
     svg.classList.toggle("clicked");
  });
      
  var svg= document.querySelector('.menu_icon');
  var button= document.querySelector('.button');
  var sidebar= document.querySelector('.sidebar');
  var fechar= document.querySelector('.fechaMenu');
  var lupasino= document.getElementById('.head-icon');
  var nav= document.querySelector('.nav');
  var logotipo= document.getElementById('logotipo');
             
    var flag=true;
 document.querySelector('.button').addEventListener('click', () => {
     if (flag) {
         logotipo.innerHTML="<span style=' background: rgb(224, 9, 81); padding-left: 7px; padding-right: 7px; border-radius: 15px;'>N</span>S.";
         logotipo.style.transform="translateX(130px)";
         logotipo.style.transition="transform.5s";
         nav.style.transform="translateX(0px)";
         lupasino.style.visibility= "hidden";
            
         flag=false;
     } else{
             logotipo.innerHTML="<span style=' background: rgb(224, 9, 81); padding-left: 7px; padding-right: 7px; border-radius: 15px;'>N</span>osso Saber.com";
             logotipo.style.transform="translateX(0px)";
             nav.style.transform="translateX(-50px)";
             lupasino.style.visibility= "visible";
             flag=true; 
      }

   });
 var mql = window.matchMedia('(max-width: 960px)');
 var lupa = document.getElementById('lupa');
 var lupasino = document.querySelector('.head-icon')
 var crayons = document.querySelector('.crayons-icon')
 var input = document.querySelector('.input-lupa');
 var relatives = document.querySelector('#relatives')


 function render(e) {
  if (e.matches) {

    const showOnPx = 100;
    const climas = document.querySelector(".sun");
    const backToTopButton = document.querySelector(".back-to-top");
    const pageProgressBar = document.querySelector(".progress-bar");
    
    const showOnPx1 = null;
    const sujestão = document.querySelector(".container-sujestão");
    const container2 = document.querySelector(".container2");
    
    const scrollContainer = () => {
      return document.documentElement || document.body;
    };
    
    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: "smooth"
      });
    };
    
    document.addEventListener("scroll", () => {
      console.log("Scroll Height: ", scrollContainer().scrollHeight);
      console.log("Client Height: ", scrollContainer().clientHeight);
    
      const scrolledPercentage =
        (scrollContainer().scrollTop /
          (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
        100;
    
      pageProgressBar.style.width = `${scrolledPercentage}%`;
    
      if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
        climas.classList.add("transita");
      } else {
        backToTopButton.classList.add("hidden");
        climas.classList.remove("transita");
      }
      if (scrollContainer().scrollTop > showOnPx1) {
        sujestão.classList.remove("absolute");
        container2.classList.remove("absolute2");
      } 
    });
    
    backToTopButton.addEventListener("click", goToTop);
    
    input.style.visibility = 'hidden';
    input.style.opacity = 0;
    input.style.transition = 'opacity 1.5s';
    lupasino.style.visibility="visible";

   document.querySelector('.subnav').addEventListener('click', () => {
  lupasino.style.visibility= "hidden";
});

    lupa.addEventListener('click', function () {
        input.style.visibility = 'visible';
        input.style.opacity = 1;
        input.style.transition = 'opacity 1.5s';
        logotipo.style.transition = "transform.10s";
        logotipo.style.visibility="hidden";
        logotipo.style.opacity = 0;
        logotipo.style.transition = 'opacity 1.5s';
        lupasino.style.visibility="visible";
        lupasino.style.opacity = 1;
    });
           
    window.addEventListener('mouseup', function(event) {
         if (event.target != input ) {
            input.style.visibility = 'hidden';
            input.style.opacity = 0;
            input.style.transition = 'opacity 1.5s';
            logotipo.style.visibility="visible";
            logotipo.style.opacity = 1;
            logotipo.style.transition = 'opacity 1.5s';
            
          }
       });

  }else{

    const showOnPx = 100;
    const climas = document.querySelector(".sun");
    const backToTopButton = document.querySelector(".back-to-top");
    const pageProgressBar = document.querySelector(".progress-bar");
    
    const showOnPx1 = 1608;
    const sujestão = document.querySelector(".container-sujestão");
    const container2 = document.querySelector(".container2");
    
    const scrollContainer = () => {
      return document.documentElement || document.body;
    };
    
    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: "smooth"
      });
    };
    
    document.addEventListener("scroll", () => {
      

      console.log("Scroll Height: ", scrollContainer().scrollHeight);
      console.log("Client Height: ", scrollContainer().clientHeight);
    
      const scrolledPercentage =
        (scrollContainer().scrollTop /
          (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
        100;
    
      pageProgressBar.style.width = `${scrolledPercentage}%`;
    
      if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
        climas.classList.add("transita");
      } else {
        backToTopButton.classList.add("hidden");
        climas.classList.remove("transita");
      }
      if (scrollContainer().scrollTop > showOnPx1) {
        sujestão.classList.add("absolute");
        container2.classList.add("absolute2");
      } else {
        sujestão.classList.remove("absolute");
        container2.classList.remove("absolute2");
      }
    });
    
    backToTopButton.addEventListener("click", goToTop);

    document.querySelector('.subnav').addEventListener('click', () => {
      lupasino.style.visibility= "visible";
      lupasino.style.opacity = 1;
      lupasino.style.transition = 'opacity 1.5s';
    });

   nav.style.transform="translateX(0px)";
    input.style.visibility = 'hidden';
    input.style.opacity = 0;
    input.style.transition = 'opacity 1.5s';
    lupasino.style.visibility="visible";
    lupasino.style.opacity = 1;
    lupasino.style.transition = 'opacity 1.5s';
    logotipo.style.visibility="visible";
    logotipo.innerHTML="<span style=' background:rgb(224, 9, 81); padding-left: 7px; padding-right: 7px; border-radius: 15px;'>N</span>osso Saber.com";
    logotipo.style.transform="translateX(0px)";

    lupa.addEventListener('click', function () {
     input.style.visibility = 'visible';
     input.style.opacity = 1;
     input.style.transition = 'opacity 1.5s';
     lupa.style.transition = "transform.0s";
     lupasino.style.visibility="hidden";
     lupasino.style.opacity = 0;
     lupasino.style.transition = 'opacity 1.5s';
     logotipo.style.visibility="visible";
     logotipo.style.opacity = 1;
 
    });

    window.addEventListener('mouseup', function(event) {
      if (event.target != input ) {
         input.style.visibility = 'hidden';
         input.style.opacity = 0;
         input.style.transition = 'opacity 1.5s';
         logotipo.style.visibility="visible";
         lupasino.style.visibility= "visible";
         lupasino.style.opacity = 1;
         lupasino.style.transition = 'opacity 1.5s';
       }
      });

  }
}
render(mql);
mql.addEventListener('change', render);


                  
             // eventos para fechar o menu, ele basicamente faz o inverso do script anterior
             //quando vc clicar no elemento .fechaMenu

document.querySelector('.fechaMenu').addEventListener('click', () => {
     document.querySelector('.sidebar').classList.toggle('isOpen');
     document.querySelector('.fechaMenu').classList.toggle('isClose');
     button.classList.toggle("clicked");
     svg.classList.toggle("clicked");
     recipiente.classList.toggle("clicked");
 });

document.querySelector('.fechaMenu').addEventListener('click', () => {
    logotipo.innerHTML="<span style=' background:rgb(224, 9, 81); padding-left: 7px; padding-right: 7px; border-radius: 15px;'>N</span>osso Saber.com";
     logotipo.style.transform="translateX(0px)";
     logotipo.style.transition="transform.5s";
     nav.style.transform="translateX(-50px)";
     lupasino.style.visibility= "visible";
     flag=true;
  });
  var titulo = document.querySelector("h1");
  var subtitulo = document.querySelector("h2");
  var link = document.querySelector(".logo-partilha");
  var introdução = document.querySelector(".introdução");
  var autor = document.querySelector(".autor-nome");
  
  var frag=true;
  document.querySelector(".sun").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("header").classList.toggle("dark-header");
    document.querySelector(".topico-actual").classList.toggle("shadow1");
    document.querySelector(".container1").classList.toggle("shadow");
    document.querySelector(".container2").classList.toggle("shadow2");
    document.querySelector(".container-sujestão").classList.toggle("shadow3");
    document.querySelector(".util").classList.toggle("gray1");
    document.querySelector(".inutil").classList.toggle("gray1");

    if (frag) {
      autor.style.color="#adadad";
    
      var like1 = document.querySelector(".like1").innerHTML= '<svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M27.6 18.6V11.4C27.6 8.41766 25.1823 6 22.2 6L15 22.2V42H35.916C37.7111 42.0203 39.2468 40.7149 39.516 38.94L42 22.74C42.1585 21.6957 41.8504 20.6346 41.1573 19.8375C40.4643 19.0405 39.4561 18.588 38.4 18.6H27.6Z" stroke="white" stroke-width="4" stroke-linejoin="round"/><path d="M15 22.0002H10.194C8.08532 21.9629 6.2827 23.7096 6 25.7996V38.3996C6.2827 40.4896 8.08532 42.0369 10.194 41.9996H15V22.0002Z" fill="#2F88FF" stroke="white" stroke-width="4" stroke-linejoin="round"/></svg>';
      var like2 = document.querySelector(".like2").innerHTML= '<svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M20.3795 29.4V36.6C20.3795 39.5823 22.7972 42 25.7795 42L32.9795 25.8V6H12.0635C10.2684 5.97971 8.73268 7.28507 8.46351 9.06L5.97951 25.26C5.82101 26.3043 6.1291 27.3654 6.82217 28.1625C7.51524 28.9595 8.52336 29.412 9.57951 29.4H20.3795Z" stroke="white" stroke-width="4" stroke-linejoin="round"/><path d="M32.9795 6H37.7855C39.8942 5.96271 41.6968 7.51003 41.9795 9.6V22.2C41.6968 24.29 39.8942 26.0373 37.7855 26H32.9795V6Z" fill="red" stroke="white" stroke-width="4" stroke-linejoin="round"/></svg>';
  
         
      frag=false;
  } else{
    autor.style.color="#021b38";
    
          like1 = document.querySelector(".like1").innerHTML= '<svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="black" fill-opacity="0.01"/><rect width="48" height="48" fill="black" fill-opacity="0.01"/><path d="M27.6 18.6V11.4C27.6 8.41766 25.1823 6 22.2 6L15 22.2V42H35.916C37.7111 42.0203 39.2468 40.7149 39.516 38.94L42 22.74C42.1585 21.6957 41.8504 20.6346 41.1573 19.8375C40.4643 19.0405 39.4561 18.588 38.4 18.6H27.6Z" stroke="black" stroke-width="4" stroke-linejoin="round"/><path d="M15 22.0002H10.194C8.08532 21.9629 6.2827 23.7096 6 25.7996V38.3996C6.2827 40.4896 8.08532 42.0369 10.194 41.9996H15V22.0002Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round"/></svg>';
          like2 = document.querySelector(".like2").innerHTML= '<svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="black" fill-opacity="0.01"/><rect width="48" height="48" fill="black" fill-opacity="0.01"/><path d="M20.3795 29.4V36.6C20.3795 39.5823 22.7972 42 25.7795 42L32.9795 25.8V6H12.0635C10.2684 5.97971 8.73268 7.28507 8.46351 9.06L5.97951 25.26C5.82101 26.3043 6.1291 27.3654 6.82217 28.1625C7.51524 28.9595 8.52336 29.412 9.57951 29.4H20.3795Z" stroke="black" stroke-width="4" stroke-linejoin="round"/><path d="M32.9795 6H37.7855C39.8942 5.96271 41.6968 7.51003 41.9795 9.6V22.2C41.6968 24.29 39.8942 26.0373 37.7855 26H32.9795V6Z" fill="red" stroke="black" stroke-width="4" stroke-linejoin="round"/></svg>';

          frag=true; 
   }
});

