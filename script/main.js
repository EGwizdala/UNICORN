import { OpenModalWindow } from './open-modal.js';
// import { createPost, mapCounter } from './create-post.js';
import { addthepost } from './add-post.js';
import { mapInit } from './mapinit.js';
import { MainMap, chart, polygonSeries } from './main-map.js';
import { Animations } from './animatons.js';
import { Navigation } from './navigation.js';
import { CollapseExpand } from './collapse-expand.js'
import {deleteBtns, DeletePost} from './delete-post.js'
// import { AddPin } from './add-pin.js';

//INIT MAIN MAP
export const mapChanger = new MainMap
export const newPost = new OpenModalWindow;





class MainInit {
  constructor() {
    //first post coordinates
    this.mapCoordinates = [
      {lat: 53.852517, lng:17.577373},
      {lat: 50.108173, lng:22.332111} 
    ];

    //adding post
    document.querySelector('.button').addEventListener('click', addthepost);

    this.firstPostMapInit();
    this.firstPostCollapsExpand();

    mapChanger.createMap();

    //navigation elements
    const navigation = new Navigation;
    navigation.introArrow();

    
  }

  firstPostMapInit() {
    mapInit("routeMap", this.mapCoordinates[0]);
    mapInit("routeMap1", this.mapCoordinates[1]);
  }

  firstPostCollapsExpand() {
    const article = document.getElementById("article0") 
    const article1 = document.getElementById("article1") 
    const expandArticle1 = new CollapseExpand(article);
    const expandArticle2 = new CollapseExpand(article1);
  }

}


const mainInit = new MainInit








//ANIMATIONS
const animations = new Animations
const postBtn = newPost.addBtn;
const changeBtn = mapChanger.changeBtn;

//Check DEVICE

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log("mobile device");


  document.addEventListener("DOMContentLoaded", function(){
    //dom is fully loaded, but maybe waiting on images & css files
    console.log("dom is loaded");
  animations.arrowMoveLeft();
  animations.exclamationShake();

    
});
}else{
  // false for not mobile device
  changeBtn.addEventListener("mouseover", animations.arrowMoveLeft)
  postBtn.addEventListener("mouseover", animations.exclamationShake)

  changeBtn.addEventListener("mouseout", animations.removeArrowMoveLeft)
  postBtn.addEventListener("mouseout", animations.removeExclamationShake)

  console.log("not mobile device");
}



const deletePost = new DeletePost;