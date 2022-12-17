import BoardView from '../view/board-view.js';
import SortView from './../view/list-sort-view.js';
import EventListView from '../view/event-list-view.js';
import EditingFormView from '../view/editing-form-view';
import RoutPointView from '../view/route-point-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventListView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    //Сохраняем данные полученные из модели.
    this.boardPoints = [...this.pointsModel.getPoints()];
    this.destinations = this.pointsModel.getAllDestinations();
    this.offers = this.pointsModel.getAllOffersByType();
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.eventListComponent, this.boardContainer);
    render(new EditingFormView({point: this.boardPoints[0], destinations: this.destinations, offers: this.offers}), this.eventListComponent.getElement());
    this.boardPoints.forEach((el) => { render(new RoutPointView({point: el, destinations: this.destinations, offers: this.offers}), this.eventListComponent.getElement());
    });

  }
}
