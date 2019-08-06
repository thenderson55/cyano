import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Gallery() {
  const [prints, setPrints] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError(false)
      try {
        const result = await axios("http://localhost:5000/print");
        setPrints(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false)
    }
    fetchData();
  }, []);

  return (
    <div>
      {error && <div>Problem fetching the data ...</div>}
      {loading && <div>Fetching data ...</div>}
      <ul>
        {prints &&
          prints.map((print, i) => {
            return <Card key={i} print={print} />;
          })}
      </ul>
    </div>
  );
}
