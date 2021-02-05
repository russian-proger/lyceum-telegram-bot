import React from 'react';
require('./Toasts.sass');

import Toast from './../../core/interfaces/Toast';

function prettyTime() {

}

/**
 * 
 * @param {Object} props
 * @param {Toast} props.toast
 * @param {Function} props.onRemove
 */
function ToastComponent(props) {
  const [forceUpdate, _count] = React.useReducer(x => x + 1, 0);
  const [state, setState] = React.useState({
    createdTime: Date.now(),
    timeout: 0,
    show: false
  });

  function onClose() {
    clearTimeout(state.timeout);
    setState({ ...state, show: false });
    setTimeout(props.onRemove, 150);
  }

  React.useLayoutEffect(() => {
    setTimeout(() => setState({ ...state,
      show: true, 
      timeout: setTimeout(() => onClose(), props.toast.duration * 1000)
    }), 20);
  }, []);

  return (
    <div className={`toast fade ${state.show ? 'show' : ''}`} role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">{props.toast.header}</strong>
        <small className="text-muted">{prettyTime(state.createdTime)}</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={ onClose }></button>
      </div>
      <div className="toast-body">
        {props.toast.body}
      </div>
    </div>
  );
}

/**
 * 
 * @param {Object} props
 * @param {Array<Toast>} props.toasts
 * @param {Function} props.removeToast
 */
function Toasts(props) {
  return (
    <div className="c-toasts">
      <div className="toast-container">
        {props.toasts.map((v, i) => <ToastComponent key={v.id} toast={v} onRemove={() => props.removeToast(v.id)} />)}
      </div>
    </div>
  )
}

export default React.forwardRef((props, ref) => {
  const [_count, forceUpdate] = React.useReducer(x => x + 1, 0);

  function addToast(newToast) {
    ref.current.toasts.push(newToast)
    forceUpdate();
  }

  function removeToast(id) {
    let index = ref.current.toasts.findIndex(v => v.id == id);
    if (index == -1) return false;

    ref.current.toasts.splice(index, 1);
    forceUpdate();
  }

  ref.current = ref.current ?? new Object();
  ref.current.toasts = ref.current.toasts ?? new Array();
  ref.current.add = addToast;
  ref.current.remove = removeToast;

  return <Toasts key="toast" toasts={ ref.current.toasts } removeToast={ removeToast } />
})