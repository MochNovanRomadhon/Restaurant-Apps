/* eslint-disable eol-last */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking-unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking-unliking', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-descript h3 a');

  const firstRestaurant = locate('.restaurant-descript h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-card');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-descript h3 a');

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('Tidak ada restaurant yang disukai', '.restaurant-item__not__found');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});