
class TabLink {
  constructor(tabSelect) {

    this.tabSelect = tabSelect;

    // console.log(this.tabSelect);

    this.data = this.tabSelect.dataset.tab;

    console.log(this.tabSelect, this.data);

    this.tabElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)

    this.tabItem = new TabItem(this.tabElement);

    this.tabSelect.addEventListener('click', () => { this.select() })

  }

  //this method toggle select on the links

  select() {
    const links = document.querySelectorAll('.tabs-link');

    Array.from(links).forEach(function (element) {
      element.classList.remove('tabs-link-selected')
    });

    this.tabSelect.classList.toggle('tabs-link-selected');

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {

    this.element = element;

  }

  select() {

    const items = document.querySelectorAll('.tabs-item');

    Array.from(items).forEach(e => {
      e.classList.remove('selected')
    });

    this.element.classList.add("selected");
  }
}


let tab = document.querySelectorAll('.tabs-link');



tab.forEach(element => {
  console.log(element);
  new TabLink(element);
});