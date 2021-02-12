import React from 'react';

import * as Network from "./../core/Network";

import { Toast, ToastContext } from "./../core/interfaces/Toast";
import LoadButton from './../components/LoadButton/LoadButton';

export default function Database() {
  const Toasts = React.useContext(ToastContext).current;

  const [state, setState] = React.useState({
    connected: null,
    is_config_edited: true,
    config: null
  });

  React.useEffect(() => {
    Promise.all([
      Network.call(Network.Methods.GET_DATABASE_STATE),
      Network.call(Network.Methods.GET_DATABASE_CONFIG)
    ]).then(([db_state, db_config]) => {
      setState({ ...state, connected: db_state.result, config: db_config.result });
    });
  }, []);

  function onReconnect() {
    return new Promise((resolve) => {
      Network.call(Network.Methods.RECONNECT_DATABASE).then(response => {
        var message = response.result ? "Соединение установлено успешно": "Не удалось подключиться к БД :(";
        Toasts.add(new Toast("База Данных", message));
        setTimeout(() => resolve(true), 400);
      })
    });
  }

  function onSaveDBConfig(newConfig) {
    return new Promise((resolve) => {
      Network.call(Network.Methods.SET_DATABASE_CONFIG, { config: newConfig }).then(response => {
        var message = "Конфигурация сохранена! " + (response.result.connected ? "Соединение успешно установлено" : "Не удалось соединиться с БД");
        Toasts.add(new Toast("База Данных", message))
        setState({ ...state, connected: response.result.connected });
        setTimeout(() => resolve(true), 400);
      });
    })
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <span className="h3 mb-4">Соединение</span>
            <span className="h4 mb-3">Состояние 
              { state.connected !== null && state.connected &&
                <span className="ms-2 badge bg-success">Подключено</span>
              }
              { state.connected !== null && !state.connected &&
                <span className="ms-2 badge bg-danger">Не подключено</span>
              }
            </span>
            <div className="mb-5">
              <LoadButton beside={true} onClick={ onReconnect }>Переподключить</LoadButton>
            </div>
            <span className="h4 mb-3">Конфигурация</span>
            <DBConfig onSave={onSaveDBConfig} config={state.config} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">

          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Компонент для просмотра/редактирования конфигурации БД
 * @param {{
 *  config: object,
 *  onSave: function
 * }} props
 */
function DBConfig(props) {
  const lconfig = [["Хост", "host"], ["Порт", "port"], ["Логин", "login"], ["Пароль", "password"], ["База Данных", "database"]];
  const inputRefs = lconfig.map(() => React.useRef(null));
  const [state, setState] = React.useState({
    show_password: false
  });

  function onSaveConfig() {
    if (typeof props.onSave != "function") return null;

    let newConfig = new Object();
    lconfig.forEach(([_, v], i) => {
      newConfig[v] = inputRefs[i].current.value;
    });

    return props.onSave(newConfig);
  }

  if (!props.config) {
    return (
      <React.Fragment />
    );
  }

  return (
    <form className="">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Свойство</th>
            <th scope="col">Значение</th>
          </tr>
        </thead>
        <tbody>
          {lconfig.map((v, i) => (
            <tr key={i}>
              <td>{v[0]}</td>
              <td><input ref={inputRefs[i]} defaultValue={props.config[v[1]]} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <LoadButton beside={true} onClick={onSaveConfig}>Сохранить</LoadButton>
    </form>
  );
}