import API_ENDPOINT from '../globals/api-endpoint';

class RestDb {
  static async restaurantItemTemplete() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview(reviews) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: reviews.id,
        name: reviews.name,
        review: reviews.review,
      }),
    });
    return response.json();
  }
}

export default RestDb;
