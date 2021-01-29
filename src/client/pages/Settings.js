import React from 'react';

import * as Network from "./../core/Network";

function valid(condition) {
  return condition == null ? "" : (condition ? "is-valid" : "is-invalid");
}

export default function Settings(props) {
  const tokenRef = React.useRef();
  const [state, setState] = React.useState({
    botToken: null,
    fetching: false,
    isTokenHidden: true,
    tokenInputStatus: { valid: null, message: "" }
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
      console.log(res);
      setState({ ...state, botToken: res.ok ? newToken : state.botToken, tokenInputStatus: { valid: res.ok, message: res.message } });
      if (res.ok) {
      }
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
          </div>
        </div>

        {/* Write new token */}
        <div className="col-md-6 mt-2">
          <div className="card">
            <p className="h3 mb-3">Ввод существующего токена</p>
            <div className="input-group mb-3">
              <span className="input-group-text">Новый токен</span>
              <input ref={tokenRef} type="text" className={["form-control", valid(state.tokenInputStatus.valid)].join(' ')}
                aria-label="Username" aria-describedby="basic-addon1" />
              <div className="invalid-feedback">
                {state.tokenInputStatus.message}
              </div>
            </div>
            <button type="button" className="w-25 btn btn-primary"
              onClick={ () => onSaveNewToken(tokenRef.current.value) }>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  )
}