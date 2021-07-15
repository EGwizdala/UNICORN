import { createPost, mapCounter } from './create-post.js';
import { mapInit } from './mapinit.js';
import { addPin } from './add-pin.js';
import { CollapseExpand } from './collapse-expand.js';
import { OpenModalWindow } from './open-modal.js';


// CREATE POST OBJ
export const postElements = {
  h2: document.getElementById("header"),
  h4: document.getElementById("destination"),
  p1: document.querySelector('textarea'),
  lat: document.getElementById("latitude"),
  long: document.getElementById("longitude"),
}

export const headerElem = document.getElementById("header");

export function addthepost() {
  const latitude = parseFloat(postElements.lat.value);
  const longitude = parseFloat(postElements.long.value);
  const destination =  postElements.h4.value;
  const header = postElements.h2.value;
  const text = postElements.p1.value;
  const postImg = document.getElementById("file").value;
  const postImgs = document.getElementById("file-1").value;
  
  const openModal = new OpenModalWindow

  console.log(openModal.editBtn.dataset.edition)
  if (openModal.editBtn.dataset.edition === "is-active") {
    const article = document.querySelector("article[data-edition='is-active']")

      console.log(article)
  }


  const post = new createPost;


  console.log(openModal.editBtn)
    // const date = document.querySelector('.date').value;
    // console.log(date)
  
    post.addPostToHTML({
      // date: document.querySelector('date').value,
      destination: destination,
      latitude: latitude,
      longitude: longitude,
      header: header,
      text: text,
      postImg: postImg,
      postImgs: postImgs,
    });
  
 

  const mapId = `routeMap${mapCounter-1}`;

  const mapCord = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
  mapInit(mapId, mapCord);

  addPin(latitude, longitude, header);

  const article = document.getElementById(`article${mapCounter-1}`)
  // console.log(article)
  const collapseExpand = new CollapseExpand(article);


}



