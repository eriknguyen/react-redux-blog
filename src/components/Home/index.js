import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from './Banner';
import MainView from './MainView';

import agent from '../../agent';

const Promise = global.Promise;

// link component props to redux state
const mapStateToProps = state => ({
  appName: state.common.appName
});

// for redux to dispatch an action
const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({
    type: 'HOME_PAGE_LOADED',
    payload
  })
});

class Home extends Component {
  componentWillMount() {
    this.props.onLoad(agent.Articles.all());
  }

  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">
            <MainView />

            <div className="row-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
