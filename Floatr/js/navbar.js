class Open {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.menu-img');
    this.close = this.element.querySelector('.close-img');
    this.content = this.element.querySelector('.menu-open');

    this.button.addEventListener('click', () => {
      this.toggleContent()
    })

    this.close.addEventListener('click', () => {
      this.toggleContent()
    })
  }

  toggleContent() {
    this.content.classList.toggle('hidden');
    this.button.classList.toggle('hidden');
  }

}


let menu = document.querySelector('.menu');

let menuOpen = new Open(menu);