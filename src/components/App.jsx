import React from "react";
import Header from "./Header";
import Section from "./Section";
import { useState, useEffect } from "react";

// const database = require("../knex");

export default function App() {
  // const [nameArr, setNameArr] = useState(null);
  const [allData, setAllData] = useState([]);
  const [refItem, setRefItem] = useState("");
  const [partData, setPartData] = useState([]);
  const [addingItem, setAddingItem] = useState("");
  const [addingTextAll, setAddingTextAll] = useState("");
  const [edittingItem, setEdittingItem] = useState("");
  const [edittingTextAll, setEdittingTextAll] = useState("");
  const [deletingItem, setDeletingItem] = useState("");
  // const [deletingTextAll, setDeletingTextAll] = useState("");

  //全データを表示(OK)
  async function getAllData() {
    await fetch("/api/all")
      .then((response) => response.json())
      .then((data) => setAllData(data));
  }

  // //全データ表示のエレメント作成
  // function createDBelement() {
  //   const elementArr = allData.map((elm) => (
  //     <li key={elm.id}>
  //       {elm.item} {elm.text_all} {elm.text_part} {elm.number_of_research}
  //     </li>
  //   ));
  //   return elementArr;
  // }

  //データの一部参照(OK)
  async function selectedData() {
    await fetch("/api/refer/" + refItem, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPartData(data));
  }

  //データの追加(OK)
  async function addNewData() {
    await fetch(`/api/post/insert/${addingItem}/${addingTextAll}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setAllData(data));
    alert("追加完了");
  }

  //データの編集(OK)
  async function editData() {
    await fetch(`/api/patch/update/${edittingItem}/${edittingTextAll}`, {
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((data) => setAllData(data));
    alert("編集完了");
  }

  //データの削除(OK)
  async function deleteData() {
    await fetch(`/api/delete/delete/${deletingItem}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setAllData(data));
    alert("削除完了");
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="showArea">
        <div className="showArea__refAdd">
          <div className="showArea__refAdd--ref">
            <input
              type="text"
              value={refItem}
              onChange={(event) => setRefItem(event.target.value)}
              id="test"
            />
            <button onClick={selectedData}>一部データ表示</button>
            <ul>
              {partData.map((elm) => (
                <p key={elm.id}>{elm.text_all}</p>
              ))}
            </ul>
          </div>
          <br />
          <div className="showArea__refAdd--add">
            <input
              type="text"
              value={addingItem}
              onChange={(event) => setAddingItem(event.target.value)}
              id="addItem"
              placeholder="追加したいitem"
            />
            <input
              type="text"
              value={addingTextAll}
              onChange={(event) => setAddingTextAll(event.target.value)}
              id="addTextAll"
              placeholder="追加したいTextAll"
            />
            <button onClick={addNewData}>データ追加</button>
          </div>
        </div>
        <br />
        <br />
        <div className="showArea__editDel">
          <div className="showArea__editDel--edit">
            <input
              type="text"
              value={edittingItem}
              onChange={(event) => setEdittingItem(event.target.value)}
              id="edittingItem"
              placeholder="編集したいitem"
            />
            <input
              type="text"
              value={edittingTextAll}
              onChange={(event) => setEdittingTextAll(event.target.value)}
              id="edittingTextAll"
              placeholder="編集したいTextAll"
            />
            <button onClick={editData}>データ編集</button>
          </div>
          <br />
          <br />
          <div className="showArea__refAdd--del">
            <input
              type="text"
              value={deletingItem}
              onChange={(event) => setDeletingItem(event.target.value)}
              id="deletingItem"
              placeholder="削除したいitem"
            />
            <button onClick={deleteData}>データ削除</button>
          </div>
        </div>
      </div>

      <Section refItem={refItem}></Section>
      {/* <button onClick={createDBelement}>全データ表示</button> */}
      <ul>
        {/* {allData.map((elm) => (
          <li key={elm.id}>
            {elm.item} {elm.text_all} {elm.text_part} {elm.number_of_research}
          </li>
        ))} */}
        {/* {createDBelement()} */}
      </ul>
    </div>
  );
}
