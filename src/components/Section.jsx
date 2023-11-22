import React from "react";
import ShowAreaRefAdd from "./ShowAreaRefAdd";
import ShowAreaEditDel from "./ShowAreaeEditDel";

export default function Section(props) {
  return (
    <div>
      <p>Sectionも返したよ</p>
      {/* <div>{nameArr}</div> */}
      {/* <div>{allData}</div> */}
      <div className="showArea__refAdd">
        <ShowAreaRefAdd></ShowAreaRefAdd>
      </div>
      <div className="showArea__editDel">
        <ShowAreaEditDel></ShowAreaEditDel>
      </div>
    </div>
  );
}
