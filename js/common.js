function fixedHeaderScroll(){


  let scrollpos = window.scrollY
  const header = document.getElementById("header-bar")
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add("skin-inverted")
  const remove_class_on_scroll = () => header.classList.remove("skin-inverted")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { 
      add_class_on_scroll() 
    } else { 
      remove_class_on_scroll() 
    }

    // console.log(scrollpos)
  })

}


function toggleNav(){
  var navigation = document.getElementById("header-navigation");

  if (window.getComputedStyle(navigation).display === "none") {
      navigation.style.display = "block";
      navigation.classList.add("show_mobile_nav");
  } else {
      navigation.style.display = "none";
      navigation.classList.remove("show_mobile_nav");      
  }
};


function toggleDiv(target, element){
  var targetContainer = document.getElementById(target);
  var targetTrigger = element;


  if (window.getComputedStyle(targetContainer).display === "none") {
      targetContainer.style.display = "block";
  } else {
      targetContainer.style.display = "none";
  }
};


function toggleDropdown(target, element) {
  var targetContainer = document.getElementById(target);
  var targetTrigger = element;


  if (window.getComputedStyle(targetContainer).display === "none") {
      targetContainer.style.display = "block";
  } else {
      targetContainer.style.display = "none";
  }
}

function closeMessage(target) {
   var targetMsg = document.getElementById(target);
   targetMsg.style.display = "none";
}




// Check to see if it Supports Particles
  function pop (e) {
    let amount = 240;
    // e = document.getElementById(e);
    switch (e.target.dataset.type) {
      case 'pack':
        amount = 240;
        break;
    }
    // Quick check if user clicked the button using a keyboard
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.target.getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 240; i++) {
        // We call the function createParticle 120 times
        // We pass the coordinates of the button for x & y values
        createParticle(x, y, e.target.dataset.type);
      }
    } else {
      for (let i = 0; i < amount; i++) {
        // console.dir('q');
        createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
      }
    }
  }

  function createParticle (x, y, type) {
    const particle = document.createElement('particle');
    // document.body.appendChild(particle);
    document.getElementById('page-texture').appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 1000;
    let destinationY = (Math.random() - 0.5) * 1000;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 500;
    
    switch (type) {

      case 'pack':
        particle.style.background = `rgba(255,255,255,0.8)`;
        particle.style.borderRadius = `50%`;
        width = height = Math.random() * 5 + 4;
        break;
      
    }
    
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    
    setTimeout(function(){

      const animation = particle.animate([
        {
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
          opacity: 1
        },
        {
          transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
          opacity: 0
        }
      ], {
        duration: Math.random() * 1000 + 500,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
      });
      animation.onfinish = removeParticle;

    },2000); // Wait 2 seconds before exploding
  }

  function removeParticle (e) {
    e.srcElement.effect.target.remove();
  }

  if (document.body.animate) {
    document.querySelectorAll('.pack-link').forEach(button => button.addEventListener('click', pop));
  }




 