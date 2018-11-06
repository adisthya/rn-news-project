import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";

import reducers from "./reducers";
import sagaActions from "./sagas";

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware))//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

sagaMiddleware.run(sagaActions);

export default store;
