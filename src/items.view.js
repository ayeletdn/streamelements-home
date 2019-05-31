import React, { Component } from "react";
import { observer } from "mobx-react";
import './items.view.css';

class ItemsView extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.itemsList.items.map((item, idx) => (
            <ItemView item={item} key={idx} />
          ))}
        </ul>
      </div>
    );
  }
}

const ItemView = observer(({ item }) => (
  <li>
    <span 
        className={item.isOn ? item.class : ""}
        onClick={() => (item.isOn = !item.isOn)}>{item.name}</span>
  </li>
));

export default observer(ItemsView);