import type { IValidate } from "./interface/IValidate";

export const baseUrl = "https://rosemary.svrhr.my.id";
export const getCategoriesUrl = `${baseUrl}/api/categories`;
export const getMenuUrl = `${baseUrl}/api/menus`;
export const getOpeningHoursUrl = `${baseUrl}/reservation/opening-hours`;
export const submitSubscriptionUrl = `${baseUrl}/newsletter/add`;
export const submitReservationUrl = `${baseUrl}/reservation/add`;
export const contactUrl = `${baseUrl}/api/contact`;
export const validate = (values: IValidate) => {
  const errors: Partial<Record<keyof IValidate, string>> = {};
  if (!values.firstName) {
    errors.firstName = "Please enter first name";
  }
  if (!values.lastName) {
    errors.lastName = "Please enter last name";
  }
  if (!values.email) {
    errors.email = "Please enter email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.person || values.person < 1 || values.person > 11) {
    errors.person = "Number of persons must be between 1-11";
  }
  if (!values.date) {
    errors.date = "Please select date";
  } else if (values.date && values.date < new Date().toISOString().split("T")[0]) {
    errors.date = "Date must be greater than today";
  }
  if (!values.time) {
    errors.time = "Please select time";
  }
  return errors;
};
