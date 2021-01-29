import Page from './Page';

/**
 * @param {String} sectionName Наименование раздела
 * @param {Array<Page>} pages Массив страниц
 */
export default function Section(sectionName, pages = new Array()) {
  /**
   * @type {String}
   */
  this.name = sectionName;
  
  /**
   * @type {Array<Page>}
   */
  this.pages = pages;
}