import {getRandomRoutePoint, availableOffers, destinations} from './../mock/points.js';

const POINTS_COUNT = 7;

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomRoutePoint);
  destinations = destinations;
  offers = availableOffers;

  getPoints() {
    return this.points;
  }

  getAllDestinations() {
    return this.destinations;
  }

  getAllOffersByType() {
    return this.offers;
  }
}
