(function(){
  // ponytail: locale check is a naive prefix match on navigator.language, good enough for es/en split
  var resumeLink = document.getElementById('resume-link');
  if(resumeLink && !navigator.language.toLowerCase().startsWith('es')){
    resumeLink.href = 'resume-en.pdf';
    resumeLink.textContent = 'Download Resume';
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cmd = 'whoami';
  var result = "Wilhen Ferney Gutiérrez Pabón\n> Full Stack Developer";
  var cmdEl = document.getElementById('cmd');
  var cmdCursor = document.getElementById('cmd-cursor');
  var typedEl = document.getElementById('typed');
  var heroReveal = document.getElementById('hero-reveal');

  function showHero(){ heroReveal.classList.add('in'); }

  if(reduce){
    cmdEl.textContent = cmd;
    typedEl.textContent = result;
    showHero();
  } else {
    setTimeout(function typeCmd(i){
      i = i || 0;
      if(i <= cmd.length){
        cmdEl.textContent = cmd.slice(0,i);
        setTimeout(function(){ typeCmd(i+1); }, 95);
      } else {
        cmdCursor.style.display = 'none';
        setTimeout(typeResult, 250);
      }
    }, 900);

    function typeResult(){
      typedEl.innerHTML = '<span class="cursor"></span>';
      (function tick(j){
        j = j || 0;
        if(j <= result.length){
          typedEl.innerHTML = result.slice(0,j).replace(/\n/g,'<br>') + '<span class="cursor"></span>';
          setTimeout(function(){ tick(j+1); }, 28);
        } else {
          setTimeout(showHero, 300);
        }
      })();
    }
  }

  var heroSection = document.querySelector('.hero');
  var heroTicking = false;
  function updateHeroScroll(){
    var rect = heroSection.getBoundingClientRect();
    var scrollable = heroSection.offsetHeight - window.innerHeight;
    var p = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 1;
    document.documentElement.style.setProperty('--p', p);
    if(p > 0.02) showHero();
    heroTicking = false;
  }
  if(!reduce){
    window.addEventListener('scroll', function(){
      if(!heroTicking){ requestAnimationFrame(updateHeroScroll); heroTicking = true; }
    }, {passive:true});
    updateHeroScroll();
  }

  var fills = document.querySelectorAll('.layer-fill');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.style.width = en.target.getAttribute('data-w');
        obs.unobserve(en.target);
      }
    });
  }, {threshold:0.4});
  fills.forEach(function(f){ obs.observe(f); });

  var reveals = document.querySelectorAll('.reveal');
  var revealObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.classList.add('is-visible');
        revealObs.unobserve(en.target);
      }
    });
  }, {threshold:0.15});
  reveals.forEach(function(r){ revealObs.observe(r); });
})();
