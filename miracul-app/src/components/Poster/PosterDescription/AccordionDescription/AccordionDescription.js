import React, { Component } from "react";
import "./AccordionDescription.css";
class Accordion extends Component {
  state = {
    checkA: true,
    checkB: true,
    checkC: true,
    indexes: ["a", "b", "c"],
  };
  toggleAccardion = (t) => {
    if (t === "a") {
      this.setState((prevState) => ({
        checkA: !prevState.checkA,
      }));
    } else if (t === "b") {
      this.setState((prevState) => ({
        checkB: !prevState.checkB,
      }));
    } else {
      this.setState((prevState) => ({
        checkC: !prevState.checkC,
      }));
    }
  };
  render() {
    return (
      <ul className="accordion-ul">
        <li className="ac-li">
          <input
            type="checkbox"
            checked={this.state.checkA}
            className="ac-input"
            onClick={() => this.toggleAccardion("a")}
            key={this.state.indexes[0]}
          />
          <i></i>
          <h2 className="ac-title">Sizing</h2>
          <p className="ac-text">
            Each artwork is made available in three sizes: 30x40cm (12x16"),
            50x66.5cm (20x26") and 70x93.5cm (28x37"). To see how they look in
            real life click on the sizes and it will change in the room. This
            means that the limited edition is split up into three sizes, and the
            individual sizes are even more limited.
          </p>
        </li>
        <li className="ac-li">
          <input
            type="checkbox"
            checked={this.state.checkB}
            onClick={() => this.toggleAccardion(this.state.indexes[1])}
            key={this.state.indexes[1]}
          />
          <i className="ac-i"></i>
          <h2 className="ac-title">Product Details</h2>
          <p className="ac-text">
            Using the sibling and checked selectors, we can determine the
            styling of sibling elements based on the checked state of the
            checkbox input element. One use, as demonstrated here, is an
            entirely CSS and HTML accordion element. Media queries are used to
            make the element responsive to different screen sizes.
          </p>
        </li>
        <li className="ac-li">
          <input
            type="checkbox"
            checked={this.state.checkC}
            onClick={() => this.toggleAccardion(this.state.indexes[2])}
            key={this.state.indexes[2]}
          />
          <i></i>
          <h2 className="ac-title">Shipping</h2>
          <p className="ac-text">
            Please allow 14-25 working days for your order to arrive. Why so
            long? Because a limited edition artwork is worth waiting for? Yes.
            But also because the environmental impact of worldwide shipping is
            enormous. Our customers are pretty equally distributed worldwide and
            ideally we would have a distribution centre on each continent.
            However, that would mean shipping the artworks twice. From the
            factory to the warehouse, and from the warehouse to the customer,
            resulting in higher CO2 emissions. Instead, we choose on-demand
            creation of artworks to minimise waste, and shipping to customers
            directly from the Ecstase factory to minimise our carbon footprint.
          </p>
        </li>
      </ul>
    );
  }
}
export default Accordion;
