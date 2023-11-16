import RestDb from '../../data/restaurantdb';
import { RestaurantItem } from '../templates/template-creator';

const RestItemHome = {
  async render() {
    return `
      <section class="menu-label">
        <h2 class="label-title">Explore Restaurant</h2>
        <article id="restaurant" class="restaurant">
        </article>
      </section>
    `;
  },

  async afterRender() {
    const rests = await RestDb.restaurantItemTemplete();
    const restaurantContainer = document.querySelector('#restaurant');
    rests.forEach((rest) => {
      restaurantContainer.innerHTML += RestaurantItem(rest);
    });
  },
};

export default RestItemHome;
