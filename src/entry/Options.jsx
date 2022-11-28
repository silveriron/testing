import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";

const Options = ({ option }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${option}`)
      .then((response) => setItem(response.data))
      .catch((error) => console.log(error));
  }, [option]);

  const ItemContent = option === "scoops" ? ScoopOption : null;

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
