import BoardView from '../view/board-view.js';
import SortView from './../view/list-sort';
import EventListView from './../view/event-list.js';
import FormOfCreationView from './../view/form-of-creation.js';
import EditingFormView from './../view/editing-form';
import RoutPointView from './../view/route-point.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  eventListComponent = new EventListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(new FormOfCreationView, this.boardComponent.getElement());
    render(this.eventListComponent, this.boardContainer);
    render(new EditingFormView(), this.eventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RoutPointView(), this.eventListComponent.getElement());
    }
  }
}
