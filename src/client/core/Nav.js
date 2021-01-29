// Interfaces
import Page from './interfaces/Page';
import Section from './interfaces/Section';

// Pages
import SettingsComponent from './../pages/Settings';

/**
 * @param {PopStateEvent} event
 */
function popStateHandler(event) {
  document.title = event.state.title ?? document.title;
}

window.addEventListener('popstate', popStateHandler);

/**
 * @type {Array<Section>}
 */
export const NavSections = [
  new Section("Статус"),
  new Section("Управление")
];

/**
 * @type {Array<Page>}
 */
export const NavPages = [
  new Page('system_monitor',  "Системный монитор", null,              0),
  new Page('traffic_monitor', "Монитор трафика",   null,              0),
  new Page('journal',         "Журнал сообщений",  null,              0),
  new Page('settings',        "Общие настройки",   SettingsComponent, 1),
  new Page('database',        "База Данных",       null,              1),
  new Page('mailing',         "Рассылка",          null,              1),
  new Page('user_messages',   "Сообщения",         null,              1),
];

export const defaultPage = NavPages.find(page => '/' + page.name == location.pathname.replace(DEFAULT_PATH, ""));

NavPages.forEach((v) => NavSections[v.section].pages.push(v));
