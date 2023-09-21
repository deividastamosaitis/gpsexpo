import { FaEdit } from "react-icons/fa";

const Objektas = ({ objektas }) => {
  return (
    <div className="d-flex">
      <p>
        <b>1. </b>
        {objektas.name}
        {objektas.address}
        {objektas.status}
      </p>
      <div className="objekto-icons" style={{ marginLeft: "10px" }}>
        <FaEdit />
      </div>
    </div>
  );
};

export default Objektas;
