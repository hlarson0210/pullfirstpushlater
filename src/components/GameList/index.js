import React from "react";
import ThumbNail from "../ThumbNail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function GameList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function GameListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <ThumbNail src={ThumbNail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to game!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}