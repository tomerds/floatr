// ****************** Join button ******************

class JoinUs {
  constructor(element) {
    this.element = element;

    this.joinButton = document.querySelector(".join");
    this.email = document.querySelector('.form-group');

    this.joinButton.addEventListener('click', () => {
      this.scroll();
      this.highlight(this.email);
    })
  }

  scroll() {
    window.scrollTo(0, document.body.scrollHeight);
  };

  highlight(el) {
    TweenLite.fromTo(el, 1, { scale: 0 }, { scale: 1, ease: Elastic.easeOut });
  }

}

let joinUs = document.querySelector('.menu-open');

let joinUsScroll = new JoinUs(joinUs);