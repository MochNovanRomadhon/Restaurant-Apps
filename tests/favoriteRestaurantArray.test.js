/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((rest) => rest.id == id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(rest) {
    // eslint-disable-next-line no-prototype-builtins
    if (!rest.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(rest.id)) {
      return;
    }

    favoriteRestaurant.push(rest);
  },

  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter((rest) => rest.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
