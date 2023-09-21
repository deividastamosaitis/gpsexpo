import ObjektasForm from "../components/ObjektasForm";
import Objektas from "../components/Objektas";
import { useEffect, useState } from "react";

const ObjectScreen = () => {
  const [objektai, setObjektai] = useState(null);

  useEffect(() => {
    const fetchObjektus = async () => {
      const response = await fetch("/api/forms/getforms");
      const json = await response.json();

      if (response.ok) {
        setObjektai(json);
      }
    };

    fetchObjektus();
  }, []);

  return (
    <div>
      <h2>Objektu puslapis</h2>
      <ObjektasForm />
      <div className="d-flex">
        <p>
          <b>Viso objektu:</b> 0
        </p>
        <p style={{ marginLeft: "10px" }}>
          <b>Aplankytu objektu:</b> 0
        </p>
      </div>
      <hr />
      {objektai &&
        objektai.map((objektas) => (
          <Objektas key={objektas._id} objektas={objektas} />
        ))}
    </div>
  );
};

export default ObjectScreen;
