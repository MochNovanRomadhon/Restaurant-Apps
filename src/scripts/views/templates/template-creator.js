import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const RestaurantDetail = (rest) => `

    

    <section class="detail">
      <article class="detail-head">
        <h2 class="detai-title">${rest.name}</h2>
        <img class="detail-image" src="${CONFIG.BASE_IMAGE_URL + rest.pictureId}" alt="${rest.name}" />
      </article>
      <article class="detail-info">
        <h4>Address</h4>
        <p>${rest.address}</p>
        <h4>City</h4>
        <p>${rest.city}</p>
        <h4>Categories</h4>
        <p>${rest.categories.map((category) => category.name).join(', ')}
        <h4>Rating</h4>
        <p>${rest.rating}</p>
      </article>
    </section>

    <article class="detail-desc">
      <h4>Description</h4>
      <p>${rest.description}</p>
    </article>

  <section class="menu">
  <h2 class="menu-head">Menu</h2>
    <section class="detail-menu">

      <article class="food"> 
      <h4 class="menu-title">Foods</h4>
      <p>${rest.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</p>
      </article>
      
      <article class="drink"> 
      <h4 class="menu-title">Drinks</h4>
      <p">${rest.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</p>
      </article>
      
    </section>
  </section>

  <section class="review-head">
    <h2>Review</h2>
      ${rest.customerReviews.map((review) => `
      <article class="review">
      <h3>${review.name}</h3> 
      <p>${review.date}</p>
      <h4> ${review.review}</h4>
      </article> 
      `).join('')}
  </section>
`;

const RestaurantItem = (rest) => `
  <section class="restaurant-card">
    <article class="restaurant-item">
    <a href="/#/detail/${rest.id}">
      <img class="lazyload"  alt="${rest.name}"
      data-src="${CONFIG.BASE_IMAGE_URL + rest.pictureId}">
    </a>
      <div class="restaurant-rating">
        <p>⭐️<span class="rating-score">${rest.rating}</span></p>
      </div>
    </article>
    <article class="restaurant-descript">
      <h3><a href="/#/detail/${rest.id}">${rest.name}</a></h3>
      <p><a href="/#/detail/${rest.id}">${rest.description}</a></p>
    </article>
  </section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestaurantItem,
  RestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
