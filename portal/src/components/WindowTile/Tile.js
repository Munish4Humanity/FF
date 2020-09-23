import React, { Component } from 'react';
import SingleTile from './SingleTile';
import ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import { Preloader } from './Preloader';
import { render } from '@testing-library/react';
import DoubleTile from './DoubleTile';
export class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      loading: (Boolean = true),
      fade: false,
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
  // renderItems2() {
  //   return (
  //     <div>
  //       {this.state.tiles.map((rowdata, i) => (
  //         <div>
  //           (typeOf(rowdata.options) == 'object') ?
  //           <div>
  //             {rowdata.options.map((subcat, k) => (
  //               <div>{subcat.name}</div>
  //             ))}
  //           </div>
  //           ) : <h1>Text</h1>}
  //         </div>
  //       )}
  //     </div>
  //   );

  // ------------------------------------
  render1() {
    const fade = this.state.fade;
    return (
      <div className="rightleft">
        <button
          ref="button"
          onClick={() => this.setState({ fade: true })}
          onAnimationEnd={() => this.setState({ fade: false })}
          className={fade ? 'fade' : ''}
        >
          <subcat />
        </button>
      </div>
    );
  }
  subcat() {
    return (
      <main class="animate__animated animate__fadeInRight">
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
                <div className="wrapper">{this.renderItems()}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  // renderItems() {
  //   return (
  //     <div>
  //       {this.state.tiles.map((rowdata, i) => (
  //         <div>
  //           (typeOf(rowdata.options) == 'object') ?
  //           <div>
  //             {rowdata.options.map((subcat, k) => (
  //               <div>{subcat.name}</div>
  //             ))}
  //           </div>
  //           :<h1>Test</h1>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  // renderSub() {
  //   return (
  //     <div className="App">
  //       {typeOf(
  //         this.state.tiles.map(item.options == 'object') ? (
  //           <render1 />
  //         ) : (
  //           <Tile />
  //         )
  //       )}
  //     </div>
  //   );
  // }
  renderItems() {
    return this.state.tiles.map((item) => (
      <>
        <SingleTile key={item.name} item={item} />
      </>
    ));
  }
  render() {
    return (
      <main class="animate__animated animate__fadeInLeft">
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
                <div className="wrapper">{this.renderItems()}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Tile;
