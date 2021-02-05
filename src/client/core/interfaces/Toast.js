import React from 'react';

var _key = 0;

/**
 * @param {String} header 
 * @param {String} body 
 */
export function Toast(header="", body="", duration=10) {
  this.id = ++_key;
  this.header = header;
  this.body = body;
  this.duration = duration;
}

export function RefForwarder() {
  
  /** @param {Toast} newToast */
  function add(newToast) {}

  /** @param {Number} id */
  function remove(id) {}

  this.add = add;
  this.remove = remove;
}

export const ToastContext = React.createContext({ current: new RefForwarder });