require('./Navigation.sass');

import React from 'react';

import Page from '../../core/interfaces/Page';
import Section from '../../core/interfaces/Section';

/**
 * @param {Object} props
 * @param {Page} props.activePage
 * @param {Array<Section>} props.navigation
 * @param {Function} props.onOpenPage
 */
export default function Navigation(props) {

  return (
    <nav className="nav-bar">
      { props.navigation.map(section => (
        <React.Fragment key={section.name}>
          <div className="nav-title">{ section.name }</div>
          { section.pages.map(page => (
            <div key={ page.name }
              className={["nav-item", (props.activePage.name == page.name ? 'active' : 'inactive')].join(' ')}
              onClick={() => props.onOpenPage(page) }
              >{ page.title }
            </div>)
          )}
        </React.Fragment>
      ))

      }
    </nav>
  )
}