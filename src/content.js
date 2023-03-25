const $ = require("jquery");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  let tabGame = $(".play-type .cates .item");
  const findThuVi = tabGame.last();
  findThuVi.trigger("click");

  const theLoaiDanh = $(".play_interesting .num_content");

  const odd = theLoaiDanh.find((item) => {
    return item.innerHTML === "Lẻ";
  });

  console.log(theLoaiDanh, "oddoddodd");
});
