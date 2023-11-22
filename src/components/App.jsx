import React from "react";
import Header from "./Header";
import Section from "./Section";
import { useState, useEffect } from "react";
import "../styles/styles.css";

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
  const [addFlg, setAddFlg] = useState(false);
  const [editFlg, setEditFlg] = useState(false);
  const [delFlg, setDelFlg] = useState(false);
  const [showFlg, setShowFlg] = useState(false);

  // const [deletingTextAll, setDeletingTextAll] = useState("");

  //全データを表示(OK)
  async function getAllData() {
    await fetch("/api/all")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
      });
  }

  function controlShowFlg() {
    setShowFlg(true);
    setAddFlg(false);
    setEditFlg(false);
    setDelFlg(false);
  }

  //データの一部参照(OK)
  async function selectedData() {
    await fetch("/api/refer/" + refItem, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setPartData(data));
  }

  // setAllData(<元々入っていたデータの配列 に 今回追加したデータを追加したもの>)

  //データの追加(OK)
  async function addNewData() {
    await fetch(`/api/post/insert/${addingItem}/${addingTextAll}`, {
      method: "POST",
    });
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("allData---------" + JSON.stringify(data));
    //   // setAllData(data);
    //   setAllData(data + addingItem + addingText);
    // });
    setShowFlg(false);
    setAddFlg(true);
    setEditFlg(false);
    setDelFlg(false);
    alert("追加完了");
  }

  //データの編集(OK)
  async function editData() {
    await fetch(`/api/patch/update/${edittingItem}/${edittingTextAll}`, {
      method: "PATCH",
    });
    // .then((response) => response.json())
    // .then((data) => setAllData(data));
    setShowFlg(false);
    setAddFlg(false);
    setEditFlg(true);
    setDelFlg(false);
    alert("編集完了");
  }

  //データの削除(OK)
  async function deleteData() {
    await fetch(`/api/delete/delete/${deletingItem}`, {
      method: "DELETE",
    });
    // .then((response) => response.json())
    // .then((data) => setAllData(data));
    setAllData(allData.push(deletingItem));
    setShowFlg(false);
    setAddFlg(false);
    setEditFlg(false);
    setDelFlg(true);
    alert("削除完了");
  }

  useEffect(() => {
    getAllData();
  }, [allData]);

  return (
    <div className="allPage">
      <Header></Header>
      <div className="showArea">
        <div className="showArea__refAdd">
          <div className="showArea__refAdd--ref">
            <input
              type="text"
              value={refItem}
              onChange={(event) => setRefItem(event.target.value)}
              id="test"
              placeholder="表示したい項目"
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
              placeholder="追加したい項目"
            />
            <input
              type="text"
              value={addingTextAll}
              onChange={(event) => setAddingTextAll(event.target.value)}
              id="addTextAll"
              placeholder="追加したいテキスト"
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
              placeholder="編集したい項目"
            />
            <input
              type="text"
              value={edittingTextAll}
              onChange={(event) => setEdittingTextAll(event.target.value)}
              id="edittingTextAll"
              placeholder="編集したいテキスト"
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
              placeholder="削除したい項目"
            />
            <button onClick={deleteData}>データ削除</button>
          </div>
          <br />
          <br />
          <br />
          <button onClick={controlShowFlg}>全データ表示</button>
        </div>
      </div>

      <Section
        refItem={refItem}
        partData={partData}
        addingItem={addingItem}
        addingTextAll={addingTextAll}
        edittingItem={edittingItem}
        edittingTextAll={edittingTextAll}
        deletingItem={deletingItem}
        addFlg={addFlg}
        editFlg={editFlg}
        delFlg={delFlg}
        showFlg={showFlg}
        allData={allData}
      ></Section>
    </div>
  );
}

// const [refItem, setRefItem] = useState("");
// const [partData, setPartData] = useState([]);
// const [addingItem, setAddingItem] = useState("");
// const [addingTextAll, setAddingTextAll] = useState("");
// const [edittingItem, setEdittingItem] = useState("");
// const [edittingTextAll, setEdittingTextAll] = useState("");
// const [deletingItem, setDeletingItem] = useState("");
