import React, { Component } from "react";
import styled from "styled-components";

class RatingStars extends Component {

  render() {
    const { rating_stars, isActive,isBig } = this.props;
    return (
      <RateStar
        viewBox="0 0 1000 1000"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        star_color={isActive}
        size={isBig}
      >
        <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
      </RateStar>
    );
  }
}

export default RatingStars;

const RateStar = styled.svg`
  fill: ${props => (props.star_color ? "#008489" : "#D8D8D8")};
  width: ${props => (props.size ? "2rem" : "1rem")};
  height: ${props => (props.size ? "2rem" : "1rem")};
`;