import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";

import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

const Options = ({ option }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${option}`)
      .then((response) => setItem(response.data))
      .catch((error) => console.log(error));
  }, [option]);

  const ItemContent = option === "scoops" ? ScoopOption : ToppingOption;

  return (
    <Row>
      {item.map((data) => (
        <ItemContent
          key={data.name}
          name={data.name}
          imagePath={data.imagePath}
        />
      ))}
    </Row>
  );
};

export default Options;
