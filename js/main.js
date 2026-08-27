(function(){
  // ponytail: locale check is a naive prefix match on navigator.language, good enough for es/en split
  var resumeLink = document.getElementById('resume-link');
  if(resumeLink && !navigator.language.toLowerCase().startsWith('es')){
    resumeLink.href = 'resume-en.pdf';
    resumeLink.textContent = 'Download Resume';
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var full = "Wilhen Ferney Gutiérrez Pabón\n> Full Stack Developer";
  var el = document.getElementById('typed');
  if(reduce){
    el.textContent = full;
  } else {
    var i = 0;
    el.innerHTML = '<span class="cursor"></span>';
    function tick(){
      if(i <= full.length){
        el.innerHTML = full.slice(0,i).replace(/\n/g,'<br>') + '<span class="cursor"></span>';
        i++;
        setTimeout(tick, 28);
      }
    }
    tick();
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
