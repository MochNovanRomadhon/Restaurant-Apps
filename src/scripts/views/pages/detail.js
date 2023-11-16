import UrlParser from '../../routes/url-parser';
import RestDb from '../../data/restaurantdb';
import { RestaurantDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <section id="detail-restaurant" class="detail-restaurant">
  </section>
  <section id="likeButtonContainer"></section>
  <section id="reviewForm">
    <h2>Add Review</h2>
    <form id="reviewForm">
      <input type="text" id="reviewerName" placeholder="Name">
      <textarea id="reviewContent" placeholder="Your Review"></textarea>
      <button id="submitReview">Submit Review</button>
    </form>
  </section>

      
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const rest = await RestDb.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = RestaurantDetail(rest);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      rest: {
        id: rest.id,
        name: rest.name,
        description: rest.description,
        pictureId: rest.pictureId,
        rating: rest.rating,
      },
    });
    const submitButton = document.querySelector('#submitReview');
    submitButton.addEventListener('click', async () => {
      const reviewerName = document.querySelector('#reviewerName').value;
      const reviewContent = document.querySelector('#reviewContent').value;

      if (reviewerName.trim() !== '' && reviewContent.trim() !== '') {
        const reviewData = {
          id: rest.id,
          name: reviewerName,
          review: reviewContent,
        };

        const response = await RestDb.addReview(reviewData);

        if (response) {
          window.alert('Berhasil Mereview');

          document.querySelector('#reviewerName').value = '';
          document.querySelector('#reviewContent').value = '';
          window.location.reload();
        } else {
          console.error('Failed to add review');
        }
      } else {
        console.error('Please fill in both fields');
        window.alert('isi dulu dong');
      }
    });
  },
};

export default Detail;
