import React, { useState, useRef, useEffect } from "react";
import { Card } from "react-bootstrap";

function Buscador({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const customFilter = (item) => {
    const itemLowerCase = item.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();

    for (let i = 0; i < searchTermLowerCase.length; i++) {
      if (itemLowerCase[i] !== searchTermLowerCase[i]) {
        return false;
      }
    }
    return true;
  };

  const filteredData = data
    .filter((item) => customFilter(item))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <form className="buscar col-12 col-md-6" role="search">
        <input
          className="form-control mb-3"
          type="search"
          placeholder="Buscar"
          ref={inputRef}
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="row">
        {filteredData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Card>
              <Card.Body>
                <h5 className="card-title">{item.name}</h5>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buscador;
