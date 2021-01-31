import React from 'react';

import * as Network from "./../core/Network";

function valid(condition) {
  return condition == null ? "" : (condition ? "is-valid" : "is-invalid");
}

export default function Settings(props) {
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

  }

  function onSetWebhook() {
    Network.call(Network.Methods.SET_WEBHOOK, { url: webhookRef.current.value }).then(res => {
      console.log(res);

      setState({ ...state,
        webhookInfo: state.webhookInfo == null || !res.ok ? state.webhookInfo : { ...state.webhookInfo, url: webhookRef.current.value },
        webhookInputStatus: { valid: res.ok, message: res.message }
      })
    });
  }

  function onGetWebhook() {

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

            <p className="fs-6"><span className="text-nowrap">Текущий токен:</span>
              {state.botToken && 
                <span className="fw-bold text-nowrap">{ state.isTokenHidden ? `${state.botToken.slice(0, 3)}...${state.botToken.slice(-3)}` : ` ${state.botToken}` }</span>
              }
            </p>

            <div className="d-flex">
              <button key="token-hide" type="button"
                className={["d-inline btn me-2", (state.isTokenHidden ? "btn-primary" : "btn-light")].join(' ')}
                onClick={() => setState({...state, isTokenHidden: !state.isTokenHidden})}>{ state.isTokenHidden ? "Показать токен" : "Скрыть токен" }</button>
            </div>

            {/* Token writing */}
            <p className="h4 mb-3 mt-5">Ввод существующего токена</p>
            <div className="input-group mb-3">
              <span className="input-group-text">Token</span>
              <input ref={tokenRef} type="text" className={["form-control", valid(state.tokenInputStatus.valid)].join(' ')}
                aria-label="Username" aria-describedby="basic-addon1" />
              <button type="button" className="btn btn-primary"
                onClick={ () => onSaveNewToken(tokenRef.current.value) }>Save</button>
              <div className="invalid-feedback">
                {state.tokenInputStatus.message}
              </div>
            </div>
          </div>
        </div>

        {/* Webhooks */}
        <div className="col-md-6 mt-2">
          <div className="card">
            <p className="h3 md-3">Telegram Webhook</p>

            <p className="h4 mb-3 mt-3">Установка нового Webhook</p>
            <form className="mb-4">
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
            <div className="mb-5">
              <button type="button" className="btn btn-primary" onClick={ onGetWebhook }>Загрузить информацию</button>
            </div>

            <form>
              <button type="button" className="btn btn-secondary"
                onClick={ onDeleteWebhook }>Удалить текущий Webhook</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}