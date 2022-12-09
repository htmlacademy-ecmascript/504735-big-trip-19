import {render} from './render.js';
import ListFilterView from './view/list-filter.js';
import BoardPresenter from './presenter/board-presenter.js';

const tripMainElement = document.querySelector('.trip-controls__filters');
render(new ListFilterView(), tripMainElement);

const mainContainerElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({boardContainer: mainContainerElement});

boardPresenter.init();
