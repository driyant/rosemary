const baseUrl = process.env.REACT_APP_PUBLIC_URL;

export const fetchCategories = () => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue",
    });
    return fetch(`${baseUrl}/api/rosemary/categories`)
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
    return fetch(`${baseUrl}/api/rosemary/menus`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({
          type: "FETCH_MENU",
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

export const sendEmailSubscriber = (data) => {
  return (dispatch, getState) => {
    dispatch({
      type: "setLoadingTrue",
    });
    return fetch(`${baseUrl}/api/rosemary/newsletter`, {
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
    return fetch(`${baseUrl}/api/rosemary/contact`, {
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
    return fetch(`${baseUrl}/api/rosemary/reservation`, {
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

export const fetchOpeningHours = () => {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/api/rosemary/reservation/opening-hours`)
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "FETCH_OPENING_HOURS",
          payload: data,
        })
      );
  };
};
