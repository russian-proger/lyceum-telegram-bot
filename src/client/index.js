require('bootstrap/dist/css/bootstrap.min.css');
import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/index.sass');

// Core components
import Page from './core/interfaces/Page';
import { NavPages, NavSections, defaultPage } from './core/Nav';

// UI Components
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header'

function App(props) {
  const [state, setState] = React.useState({
    activePage: defaultPage ?? NavPages[0]
  });


  /**
   * @param {Page} newPage
   */
  function onOpenPage(newPage) {
    document.title = newPage.title;
    history.pushState({ pageIndex: NavPages.findIndex(p => p.name == newPage.name), title: newPage.title }, newPage.title, `/admin/${ newPage.name }`);
    setState({ ...state, activePage: newPage });
  }


  React.useEffect(() => {
    document.title = state.activePage.title;
    window.onpopstate = (ev => setState({ ...state, activePage: NavPages[ev.state.pageIndex] }) || console.log(ev.state));
  }, []);

  const Content = state.activePage.component;

  return (
    <React.Fragment>
      <Navigation key="navigation" activePage={state.activePage} navigation={NavSections} onOpenPage={onOpenPage} />
      <div className="c-page">
        <Header />
        { Content && <Content /> }
      </div>
    </React.Fragment>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));