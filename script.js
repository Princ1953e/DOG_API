let listPnt = document.getElementById("list");
let prnImage = document.getElementById("prnImage");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json();
  })
  .then((listData) => {
    console.log(listData);

    let data = listData.message;
    console.log(data);

    for (let key in data) {
      if (data[key].length == 0) {
        listPnt.innerHTML += `<li class="text-white text-lg capitalize p-2 flex justify-between" onclick="return pntImage('${key}')">${[
          key,
        ]} </li>`;
      } else {
        ol = `<ol>`;
        data[key].forEach((ele) => {
          ol += `<li class="text-white capitalize list-disc text-base ml-7 p-2">${[
            ele,
          ]}</li>`;
        });
        ol += `<ol>`;
        listPnt.innerHTML += `<li class="text-white text-lg capitalize p-3" onclick="return pntImage('${key}')">${[
          key,
        ]} ${ol}</li>`;
      }
    }
  })
  .catch((err) => {
    console.log("Error", err);
  });

const pntImage = (img) => {
  fetch(`https://dog.ceo/api/breed/${img}/images`)
    .then((res) => res.json())
    .then((image) => {
      let imgPnt = image.message;

      imgPnt.forEach((url) => {
        prnImage.innerHTML += `<div class="w-4/12 border border-black px-4">
          <div class="card" style="max-width:100%; max-height:100%;">
            <img src="${url}" class="card-img-top" alt="..." style="max-width:100%; max-height:100%; object-fit:cover;"/>
          </div>
        </div>`;
      });
    });
};
