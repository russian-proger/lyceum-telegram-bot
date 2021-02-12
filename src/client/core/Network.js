export const Methods = {
  GET_TOKEN: "getBotToken",
  SET_TOKEN: "setBotToken",
  SET_WEBHOOK: "setWebhook",
  GET_WEBHOOK: "getWebhook",
  DEL_WEBHOOK: "delWebhook",
  GET_DATABASE_CONFIG: "getDatabaseConfig",
  GET_DATABASE_STATE: "getDatabaseState",
  RECONNECT_DATABASE: "reconnectDatabase",
  SET_DATABASE_CONFIG: "setDataBaseConfig"
};

const apiURL = location.href.slice(0, location.href.indexOf(DEFAULT_PATH)) + '/api/';

var onError = null;
export function setOnError(func) {
  console.assert(typeof func, "function");
  onError = func;
}

/**
 * @param {String} apiMethodName Имя api-метода
 * @param {String} method Метод передачи данных
 * @param {Object} _params Параметры
 */
export function call(apiMethodName, _params={}) {
  let params = { ..._params

  };

  return fetch(`${apiURL}${apiMethodName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    if (!res.ok) {
      onError && onError(`Что-то пошло не так :(`);
    } else {
      return res.json();
    }
  }).catch(reason => {
    if (onError) onError("Сервер отправил недействительный ответ :(");
  });
}