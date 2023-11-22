import React, { useState } from "react";
import ShowAreaRefAdd from "./ShowAreaRefAdd";
import ShowAreaEditDel from "./ShowAreaeEditDel";

export default function Section(props) {
  const {
    refItem,
    partData,
    addingItem,
    addingTextAll,
    edittingItem,
    edittingTextAll,
    deletingItem,
    addFlg,
    editFlg,
    delFlg,
    showFlg,
    allData,
  } = props;

  let elementArr = [];
  //全データ表示のエレメント作成
  function createDBelement() {
    elementArr = allData.map((elm) => (
      <li key={elm.id}>
        {elm.item}： {elm.text_all}
      </li>
    ));
    return elementArr;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      {showFlg === true && (
        <div>
          <ul>
            項目名：内容
            {createDBelement()}
            {/* {allData.map((elm) => (
              <li key={elm.id}>
                {elm.item}： {elm.text_all}
              </li>
            ))} */}
          </ul>
        </div>
      )}

      {addFlg === true && (
        <div>
          <p>1つ前のアクティビティ：データ追加</p>
          <p>追加されたアイテム：{addingItem}</p>
          <p>追加されたテキスト{addingTextAll}</p>
        </div>
      )}
      {editFlg === true && (
        <div>
          <p>1つ前のアクティビティ：データ編集</p>
          <p>編集されたアイテム：{edittingItem}</p>
          <p>編集されたテキスト：{edittingTextAll}</p>
        </div>
      )}
      {delFlg === true && (
        <div>
          <p>1つ前のアクティビティ：データ消去</p>
          <p>削除された情報：{deletingItem}</p>
        </div>
      )}
      {/* <div className="showArea__refAdd">
        <ShowAreaRefAdd></ShowAreaRefAdd>
      </div>
      <div className="showArea__editDel">
        <ShowAreaEditDel></ShowAreaEditDel>
      </div> */}
    </div>
  );
}
