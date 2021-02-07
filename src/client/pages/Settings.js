import React from 'react';

import * as Network from "./../core/Network";

import { Toast, ToastContext } from "./../core/interfaces/Toast";

function valid(condition) {
  return condition == null ? "" : (condition ? "is-valid" : "is-invalid");
}

/**
 * @param {Number} timestamp
 */
function getDate(timestamp = 0) {
  var d = new Date(timestamp);
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
}

export default function Settings(props) {
  const Toasts = React.useContext(ToastContext).current;

  const tokenRef = React.useRef();
  const webhookRef = React.useRef();

  const [state, setState] = React.useState({
    fetching: false,

    botToken: null,
    isTokenHidden: true,
    tokenInputStatus: { valid: null, message: "" },

    webhookInfo: null,
    webhookInputStatus: { valid: null, message: "" }
  });

  React.useEffect(() => {
    Network.call(Network.Methods.GET_TOKEN).then(res => {
      if (res.ok) {
        setState({ ...state, botToken: res.response });
      }
    });
  }, []);

  function onSaveNewToken(newToken) {
    Network.call(Network.Methods.SET_TOKEN, { token: newToken }).then(res => {
      setState({ ...state, botToken: res.ok ? newToken : state.botToken, tokenInputStatus: { valid: res.ok, message: res.message } });
    })
  }

  function onDeleteWebhook() {
    Network.call(Network.Methods.DEL_WEBHOOK).then(res => {
      var toast = new Toast("Webhook settings", res.message);
      setState({...state, webhookInfo: null});
      Toasts.add(toast);
    })
  }

  function onSetWebhook() {
    Network.call(Network.Methods.SET_WEBHOOK, { url: webhookRef.current.value }).then(res => {
      const toast = new Toast("Webhook settings", res.message);
      Toasts.add(toast);

      if (state.webhookInfo !== null && state.webhookInfo.URL != webhookRef.current.value) {
        onGetWebhook();
      }

      setState({ ...state,
        webhookInputStatus: { valid: res.ok, message: res.message }
      })
    });
  }

  function onGetWebhook() {
    Network.call(Network.Methods.GET_WEBHOOK).then(res => {
      var toast = new Toast("Webhook settings", `Информация успешно ${state.webhookInfo === null ? 'получена' : 'обновлена'}`, 10);

      if (res.ok) {
        setState({ ...state, webhookInfo: {
          "URL": res.result.url.replace(/^$/, 'None'),
          "Last Error Message": res.result.last_error_message ?? "None",
          "Last Error Date": res.result.last_error_date > 0 ? getDate(res.result.last_error_date * 1000) : "None",
          "Max Connections": res.result.max_connections ?? "None",
          "Allowed Updates": (res.result.allowed_updates ?? []).join(', ').replace(/^$/, 'None')
        } });
      } else {
        toast.body = "Во время загрузки информации произшла ошибка";
      }

      Toasts.add(toast);
    })
  }

  const loading = state.fetching || !state.botToken;

  return (
    <div className="container mt-3">
      <div className="row">

        {/* Current token and it's updating */}
        <div className="col-md-6 mt-2">
          <div className="card">
            <div className="d-flex justify-content-between">
              <span className="h3 mb-3">Токен доступа</span>
              {loading &&
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              }
            </div>

            {/* Token writing */}
            <p className="h4 mb-3">Ввод существующего токена</p>
            <div className="input-group mb-5">
              <span className="input-group-text">Token</span>
              <input ref={tokenRef} type="text" className={["form-control", valid(state.tokenInputStatus.valid)].join(' ')}
                aria-label="Username" aria-describedby="basic-addon1" />
              <button type="button" className="btn btn-primary"
                onClick={ () => onSaveNewToken(tokenRef.current.value) }>Save</button>
              <div className="invalid-feedback">
                {state.tokenInputStatus.message}
              </div>
            </div>

            {state.botToken &&
            <>
              <p className="h4 mb-3">Текущий токен</p>
              <div className="input-group mb-2">
                <span className="input-group-text">Token</span>
                <input ref={tokenRef} type="text" className="form-control" readOnly
                  aria-label="Username" aria-describedby="basic-addon1" value={state.isTokenHidden ? ` ${state.botToken.slice(0, 3)}...${state.botToken.slice(-3)}` : ` ${state.botToken}`} />
                <button type="button" className="btn btn-primary"
                  onClick={ () => setState({...state, isTokenHidden: !state.isTokenHidden}) }>{ state.isTokenHidden ? "Показать" : "Скрыть" }</button>
                <div className="invalid-feedback">
                  {state.tokenInputStatus.message}
                </div>
              </div>
            </>
            }
          </div>
        </div>

        {/* Webhooks */}
        <div className="col-md-6 mt-2">
          <div className="card">
            <p className="h3 md-3">Telegram Webhook</p>

            <p className="h4 mb-3 mt-2">Установка нового Webhook</p>
            <form className="mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text">URL</span>
                <input ref={webhookRef} type="text" className={["form-control", valid(state.webhookInputStatus.valid)].join(' ')}
                  aria-label="Username" aria-describedby="basic-addon1" />
                <button type="button" className="btn btn-primary"
                  onClick={ onSetWebhook }>Save</button>
                <div className="invalid-feedback">
                  {state.webhookInputStatus.message}
                </div>
              </div>
            </form>

            <p className="h4 mb-3 mt-3">Текущий Webhook</p>
            <div className="mb-2">
              <button type="button" className="btn btn-primary" onClick={ onGetWebhook }>{state.webhookInfo === null ? 'Загрузить' : 'Обновить'} информацию</button>
            </div>
            { state.webhookInfo &&
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Свойство</th>
                    <th scope="col">Значение</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(state.webhookInfo).map((v, i) => (
                    <tr key={i}>
                      <td>{v[0]}</td>
                      <td>{v[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }

            <form className="mb-2m mt-4">
              <button type="button" className="btn btn-secondary"
                onClick={ onDeleteWebhook }>Удалить текущий Webhook</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}