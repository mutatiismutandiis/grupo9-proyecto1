import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, leader, members }) => {
  return (
    <div className={styles.card}>
      <h1>Nombre: {id}</h1>
      <h2>Leader: {leader}</h2>
      <h2>Desarrolladores: {members}</h2>
    </div>
  )
}

export default Card;
