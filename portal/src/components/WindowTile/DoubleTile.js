import React, { Component } from 'react';
import SingleTile from './SingleTile';
import ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import { Preloader } from './Preloader';
export class DoubleTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
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
  render1() {
    const { subItems } = this.state.tiles;
    return (
      <div>
        {Object.values(subItems).map((i) => (
          <DoubleTile key={i.name} item={i} />
        ))}
      </div>
    );
  }

  renderSubItems() {
    return this.state.tiles.map((i) => (
      <>
        <SingleTile key={i.name} item={i} />
      </>
    ));
  }
  render() {
    return (
      <>
        <main class="animate__animated">
          <section>
            <div className="header">
              <div className="background">
                <img
                  alt="header"
                  className="headerimg"
                  src="images/header.svg"
                ></img>
                <div className="shipping">
                  <h1 className="shipping">Free Shipping over $2000</h1>
                  <div className="percent">
                    <span className="discount">30% OFF WINDOWS </span>
                  </div>
                  <div className="wrapper">{this.renderSubItems()}</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default DoubleTile;
