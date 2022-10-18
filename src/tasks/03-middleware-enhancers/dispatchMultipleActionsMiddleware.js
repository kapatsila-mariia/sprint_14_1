

const dispatchMultipleActionsMiddleware = storeAPI => next => action => {
    if (Array.isArray(action)){
      let res = action.map(item => storeAPI.dispatch(item));
      return res.length
    }
    else {
      return next(action)
    }

    return next(action);

}

export default dispatchMultipleActionsMiddleware;
