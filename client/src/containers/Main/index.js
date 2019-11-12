import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import List from '../../components/List';

import * as appActions from '../../actions/app'

class Main extends Component {

  handleOnClick = (e) => {
    this.props.appActions.getData();
  };

  render() {
    console.log('render', this);

    return (
      <div id="main-layout">
        <AppBar title="Title" />
        <div id="page-wrapper" className="page-wrapper">
          <RaisedButton label="Default" onClick={this.handleOnClick}/>
          <List data={this.props.appReducer.data}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    appReducer: state.appReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
