import generalTypes, { General } from "./types";

const INITIAL_STATE: General = {
  notificationMessage: "",
  notificationType: null,
  lang: "EN",
  cookiePolicy: true,
  positionVertical: false,
  cookieSettings: {
    functional: true,
    analytics: true,
    advertisement: true,
    uncategorized: true,
  },
};

interface Action {
  type: string;
  payload: any;
}

const generalReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case generalTypes.UPDATE_SUCCESS_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "success",
      };
    case generalTypes.UPDATE_FAIL_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "fail",
      };
    case generalTypes.UPDATE_INFORMATION_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.payload,
        notificationType: "information",
      };
    case generalTypes.CLEAR_NOTIFICATION:
      return {
        ...state,
        notificationMessage: "",
        notificationType: null,
      };

    case generalTypes.UPDATE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case generalTypes.SET_COOKIE_POLICY:
      return {
        ...state,
        cookiePolicy: action.payload,
      };
    case generalTypes.POSITION_VERTICAL:
      return {
        ...state,
        positionVertical: action.payload,
      };
    case generalTypes.CHANGE_COOKIE_SETTINGS:
      return {
        ...state,
        cookieSettings: {
          ...state.cookieSettings,
          [action.payload.value]: action.payload.signal,
        },
      };
    case generalTypes.ACCEPT_ALL_COOKIES:
      return {
        ...state,
        cookieSettings: INITIAL_STATE.cookieSettings,
      };
    case generalTypes.DECLINE_ALL_COOKIES:
      return {
        ...state,
        cookieSettings: {
          functional: false,
          analytics: false,
          advertisement: false,
          uncategorized: false,
        },
      };
    default:
      return state;
  }
};

export default generalReducer;
