export const Methods = {
  GET_TOKEN: "getBotToken",
  SET_TOKEN: "setBotToken",
  SET_WEBHOOK: "setWebhook",
  GET_WEBHOOK: "getWebhook",
  DEL_WEBHOOK: "delWebhook"
};

const apiURL = location.href.slice(0, location.href.indexOf(DEFAULT_PATH)) + '/api/';

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
  }).then(res => res.json()).catch(reason => console.error(reason))
}
