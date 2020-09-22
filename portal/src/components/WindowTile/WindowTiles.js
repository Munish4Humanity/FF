import React, { Component } from 'react';

import SingleTile from './SingleTile';
import DoubleTile from './DoubleTile';
import ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import { Preloader } from './Preloader';
import { Tile } from './Tile';

class WindowTiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      subtiles: [],
      loading: (Boolean = true),
    };
  }
  timedelay() {
    setTimeout(() => {
      this.setState(
        {
          loading: false,
        },
        3000
      );
    });
  }
  componentDidMount() {
    const url =
      'https://dev-api.ff-24.net/api/v0/windows/config?lang=pl&currentPath=1';

    const suburl =
      'https://dev-api.ff-24.net/api/v0/windows/config?lang=pl&selectedParams[]=1.3.1&currentPath=2';

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          tiles: data,
          loading: false,
        });
      })
      .catch((error) => console.log(error));

    fetch(suburl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          subtiles: data,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.tiles.map((item) => (
      <>
        <SingleTile key={item.name} item={item} />
      </>
    ));
  }

  render() {
    return (
      <div className="App">{this.state.loading ? <Preloader /> : <Tile />}</div>
    );
  }
}

export default WindowTiles;
