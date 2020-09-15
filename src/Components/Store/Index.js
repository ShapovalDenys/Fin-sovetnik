import { createStore } from 'redux';

// Action types - is just a constant. MUST have a unique value.
const MONEY_VALUE = 'MONEY_VALUE';
const PASSPORT_ACCESS = 'PASSPORT_ACCESS';
const MAIN_FORM_DATA = 'MAIN_FORM_DATA';
const RANGE_STATUS = 'RANGE_STATUS';
const RANGE_STATUS_SECOND = 'RANGE_STATUS_SECOND'
const SECOND_FORM_DATA = 'SECOND_FORM_DATA';
const PAY_ACCESS = 'PAY_ACCESS';

// Action creators - a function returning an action object
export const setMoneyValue = ( moneyValue = JSON.parse(localStorage.getItem('MoneyValue')) || 30000) => ({ type: MONEY_VALUE, moneyValue });
export const setPassportAccess = ( passportAccess = false) => ({ type: PASSPORT_ACCESS, passportAccess });
export const setPayAccess = ( payAccess = false) => ({ type: PAY_ACCESS, payAccess });
export const setRangeStatus = ( rangeStatus = 0) => ({ type: RANGE_STATUS, rangeStatus });
export const setRangeStatusSecond = ( rangeStatusSecond = 0) => ({ type: RANGE_STATUS_SECOND, rangeStatusSecond });

export const setMainFormData= (
  name = "",
  surName = "",
  patronymic = "",
  email = "",
  tel = "",
  dateValue = "") => ({
    type: MAIN_FORM_DATA,
    name,
    surName,
    patronymic,
    email,
    tel,
    dateValue
  });

export const setSecondFormData= (
  passport = "",
  passportDate = "",
  passportPlaceOrgan = "",
  passportPlace = "",
  region = "",
  street = "",
  body = "",
  city = "",
  build = "",
  flat = "",
  inn = "",
  creditTerm = "",
  ) => ({
      type: SECOND_FORM_DATA,
      passport,
      passportDate,
      passportPlaceOrgan,
      passportPlace,
      region,
      street,
      body,
      city,
      build,
      flat,
      inn,
      creditTerm,
    });

// Selectors - a function receiving Redux state and returning some data from it
export const getMoneyValue = (state) => state.moneyValue;
export const getPassportAccess = (state) => state.passportAccess;
export const getRangeStatus = (state) => state.rangeStatus;
export const getRangeStatusSecond = (state) => state.rangeStatusSecond;
export const getPayAccess = (state) => state.payAccess;

export const getMainFormDataName = (state) => state.name;
export const getMainFormDataSurName = (state) => state.surName;
export const getMainFormDataPatronymic = (state) => state.patronymic;
export const getMainFormDataEmail = (state) => state.email;
export const getMainFormDataTel = (state) => state.tel;
export const getMainFormDataDateValue = (state) => state.dateValue;


export const getSecondFormPassport = (state) => state.passport;
export const getSecondFormPassportDate = (state) => state.passportDate;
export const getSecondFormPassportPlaceOrgan = (state) => state.passportPlaceOrgan;
export const getSecondFormPassportPlace = (state) => state.passportPlace;
export const getSecondFormRegion = (state) => state.region;
export const getSecondStreet = (state) => state.street;
export const getSecondFormBody = (state) => state.body;
export const getSecondFormCity = (state) => state.city;
export const getSecondFormBuild = (state) => state.build;
export const getSecondFormFlat = (state) => state.flat;
export const getSecondFormInn = (state) => state.inn;
export const getSecondFormCreditTerm = (state) => state.creditTerm;

// Initial state

  let date = new Date();
  date.setFullYear(date.getFullYear()-18, date.getMonth());
/*
const initialState = {
  moneyValue: JSON.parse(localStorage.getItem('MoneyValue')) || 30000,
  passportAccess: false,
  payAccess: false,
  name: JSON.parse(localStorage.getItem('Data')).dataName || "",
  surName: JSON.parse(localStorage.getItem('Data')).dataSurName || "",
  patronymic: JSON.parse(localStorage.getItem('Data')).dataPatronymic || "",
  email: JSON.parse(localStorage.getItem('Data')).dataEmail || "",
  tel: JSON.parse(localStorage.getItem('Data')).dataTel || "",
  dateValue: date,
  rangeStatus: 0,
  rangeStatusSecond: 0,
  passport: JSON.parse(localStorage.getItem('Data')).dataPassport || "",
  passportDate: "",
  passportPlaceOrgan: JSON.parse(localStorage.getItem('Data')).dataPassportPlaceOrgan || "",
  passportPlace: JSON.parse(localStorage.getItem('Data')).dataPassportPlace || "",
  region: JSON.parse(localStorage.getItem('Data')).dataFormRegion || "",
  street: JSON.parse(localStorage.getItem('Data')).dataStreet || "",
  body: JSON.parse(localStorage.getItem('Data')).dataBody || "",
  city: JSON.parse(localStorage.getItem('Data')).dataCity || "",
  build: JSON.parse(localStorage.getItem('Data')).dataBuild || "",
  flat: JSON.parse(localStorage.getItem('Data')).dataFlat || "",
  inn: JSON.parse(localStorage.getItem('Data')).dataInn || "",
  creditTerm: "6 месяцев",
};
*/
const initialState = {
  moneyValue: JSON.parse(localStorage.getItem('MoneyValue')) || 30000,
  passportAccess: false,
  payAccess: false,
  name: "",
  surName: "",
  patronymic: "",
  email: "",
  tel: "",
  dateValue: date,
  rangeStatus: 0,
  rangeStatusSecond: 0,
  passport: "",
  passportDate: "",
  passportPlaceOrgan: "",
  passportPlace: "",
  region: "",
  street: "",
  body: "",
  city: "",
  build: "",
  flat: "",
  inn: "",
  creditTerm: "6",
}


// rootReducer - this function is called after dispatching an action
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MONEY_VALUE:
      return { ...state,
        moneyValue: action.moneyValue,
      };

    case PASSPORT_ACCESS:
      return { ...state,
        passportAccess: action.passportAccess,
      };

    case PAY_ACCESS:
      return { ...state,
        payAccess: action.payAccess,
      };

    case MAIN_FORM_DATA:
      return { ...state,
        name: action.name,
        surName: action.surName,
        patronymic: action.patronymic,
        email: action.email,
        tel: action.tel,
        dateValue: action.dateValue,
      };

    case SECOND_FORM_DATA:
      return { ...state,
        passport: action.passport,
        passportDate: action.passportDate,
        passportPlaceOrgan: action.passportPlaceOrgan,
        passportPlace: action.passportPlace,
        region: action.region,
        street: action.street,
        body: action.body,
        city: action.city,
        build: action.build,
        flat: action.flat,
        inn: action.inn,
        creditTerm: action.creditTerm,
        };

    case RANGE_STATUS:
      return { ...state,
        rangeStatus: action.rangeStatus,
    };

    case RANGE_STATUS_SECOND:
      return { ...state,
        rangeStatusSecond: action.rangeStatusSecond,
    };

    default:
      return state;
  }
};

// The `store` should be passed to the <Provider store={store}> in `/src/index.tsx`
const store = createStore(
  rootReducer,
);

export default store;
