class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
       this.mobileMenu = document.querySelector(mobileMenu);
       this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass);

    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavBar = new MobileNavBar(
    ".mobileMenu",
    ".navList",
    ".navList li"
);

mobileNavBar.init();

if ($(window).width() <= 1028) {
    $('.alignContainer').slick({
      slidesToShow: 1, // n
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'

    });
    
  }
