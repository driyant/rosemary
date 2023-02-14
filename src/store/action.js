const baseUrl = "https://www.rosemary-server.helloriyan.my.id"

export const fetchCategories = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue",
    });
    return fetch(`${baseUrl}/api/categories`)
      .then((resp) => resp.json())
      .then((resp) => {
        const categories = resp.map((resp) => resp.name);
        return ["all", ...categories];
      })
      .then((data) => {
        dispatch({
          type: "FETCH_CATEGORIES",
          payload: data,
        });
      })
      .finally(() => {
        dispatch({
          type: "setLoadingFalse",
        });
      });
  };
};

export const fetchMenu = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue",
    });
    return fetch(`${baseUrl}/api/menus`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "FETCH_MENU",
          payload: data,
        });
        return data;
      })
      .finally(() => {
        dispatch({
          type: "setLoadingFalse",
        });
      });
  };
};

export const sendEmailSubscriber = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue",
    });
    return fetch(`${baseUrl}/newsletter/add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp)
      .finally(() => {
        dispatch({
          type: "setLoadingFalse",
        });
      });
  };
};

export const contactHandler = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue",
    });
    return fetch(`${baseUrl}/api/contact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp)
      .finally(() => {
        dispatch({
          type: "setLoadingFalse",
        });
      });
  };
};

export const reservationHandler = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue",
    });
    return fetch(`${baseUrl}/reservation/add`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp)
      .finally(() => {
        dispatch({
          type: "setLoadingFalse",
        });
      });
  };
};
