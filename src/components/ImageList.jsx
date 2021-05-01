import React, { Component } from "react";

export default class ImageList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.images.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.urls.small} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
