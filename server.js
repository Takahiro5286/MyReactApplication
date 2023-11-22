const express = require("express");
const path = require("path");

const app = express();
const port = 8000;
const database = require("./src/knex");

app.get("/", (req, res) => {
  res.send("LocalHostに繋がった");
});

//データベース内の全データを表示(OK)!
app.get("/api/all", (req, res) => {
  database("weak_point")
    .select()
    .from("weak_info")
    .then((result) => {
      res.send(result);
    });
});

//データベース内の一部を表示（本番）OK
app.get("/api/refer/:item", (req, res) => {
  const item = req.params.item;
  database("weak_point")
    .select("text_all", "text_part")
    .from("weak_info")
    .where({
      item: item,
    })
    .then((result) => {
      res.send(result);
    });
});

//データベースの情報を追加テスト(本番)OK
app.post("/api/post/insert/:item/:text_all", (req, res) => {
  console.log("postリクエスト(insert)を受け取った");
  const item = req.params.item;
  let text_all = req.params.text_all;
  let text_part = String(text_all).substring(0, 3);
  database("weak_info")
    .insert({
      item: item,
      text_all: text_all,
      text_part: text_part,
      number_of_research: 0,
    })
    .then((result) => {
      res.json(result);
    });
});

//データベースの情報を編集(本番)OK
app.patch("/api/patch/update/:editItem/:editText_all", (req, res) => {
  console.log("patchリクエスト(update)を受け取った");
  const editItem = req.params.editItem;
  const editText_all = req.params.editText_all;
  const editText_part = editText_all.substring(0, 3);
  database("weak_info")
    .where({
      item: editItem,
    })
    .update({ text_all: editText_all, text_part: editText_part })
    .then((result) => {
      res.json(result);
    });
});

//データベースの情報を削除(本番)OK
app.delete("/api/delete/delete/:deleteItem", (req, res) => {
  console.log("deleteリクエスト(delete)を受け取った");
  const deleteItem = req.params.deleteItem;
  database("weak_info")
    .where({
      item: deleteItem,
    })
    .del()
    .then((result) => {
      res.json(result);
    });
});

app.listen(port, () => {
  console.log("サーバーが起動しました！");
});
