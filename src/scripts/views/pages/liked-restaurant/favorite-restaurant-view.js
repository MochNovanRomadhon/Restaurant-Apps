/* eslint-disable class-methods-use-this */
import { RestaurantItem } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
      <section class="favor">
      <h2 class="label-title">Favorite Restaurant</h2>
      <article id="restaurant" class="restaurant">
      </article>
    </section>
      `;
  }

  showFavoriteRestaurant(restaurant) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce(
        (carry, rest) => carry.concat(RestaurantItem(rest)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurant').innerHTML = html;

    document.getElementById('restaurant').dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Tidak ada film untuk ditampilkan
      </div>
    `;
  }
}

export default FavoriteRestaurantView;
