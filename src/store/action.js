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

