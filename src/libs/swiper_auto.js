import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


document.addEventListener( 'DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
});