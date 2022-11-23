export const fetchCategories = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue"
    })
    return fetch(`${process.env.REACT_APP_API_CATEGORIES}`)
    .then(resp => resp.json())
    .then(resp => {
      const categories = resp.map(resp => resp.name)
      return ['all', ...categories]
    })
    .then(data => {
      dispatch({
        type: "FETCH_CATEGORIES",
        payload: data
      })
    })
    .finally(() => {
      dispatch({
        type: "setLoadingFalse"
      })
    })
  }
}

export const fetchMenu = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'setLoadingTrue'
    })
    return fetch(`${process.env.REACT_APP_API_MENU}`)
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: "FETCH_MENU",
        payload: data
      })
      return data
    })
    .finally(() => {
      dispatch({
        type: 'setLoadingFalse'
      })
    })
  }
}

export const sendEmailSubscriber = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue"
    })
    return fetch(`${process.env.REACT_APP_NEWSLETTER}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(resp => resp)
    .finally(() => {
      dispatch({
        type: "setLoadingFalse"
      })
    })
  } 
}