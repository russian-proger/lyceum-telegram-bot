import React from 'react';
import Section from './Section';

/**
 * @param {String} pageName Идентификатор страницы
 * @param {String} title Название страницы
 * @param {React.Component} component DOM-представление страницы
 * @param {Section} section Раздел, к которому прикреплена страница
 */
export default function Page(pageName, title, component, section) {
  /**
   * @type {String}
   */
  this.name = pageName ?? "";

  /**
   * @type {String}
   */
  this.title = title ?? "";

  /**
   * @type {React.Component}
   */
  this.component = component ?? null;

  /**
   * @type {Section}
   */
  this.section = section ?? null;
}