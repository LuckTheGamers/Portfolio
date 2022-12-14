(function(){
  const menuItems = document.querySelectorAll('.nav-menu a[href^="#"]');
  var position = 0;

  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  function changePositionWindow(){
    if(window.innerWidth >= 1000){
      position = 100;
    }else{
      position = 20;
    }
  }

  function scrollToIdOnClick(event) {
    changePositionWindow();
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget)- position;
    scrollToPosition(to);
  }

  menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  });

  // Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
  /**
   * Smooth scroll animation
   * @param {int} endX: destination x coordinate
   * @param {int) endY: destination y coordinate
   * @param {int} duration: animation duration in ms
   */
  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };
})();