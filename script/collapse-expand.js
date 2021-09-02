import { toggleClass } from "./library.js";



export class CollapseExpand{
    constructor(article){
    this.article = article
    this.p1 = this.article.querySelector(".p1");
    this.points = this.article.querySelector(".points");
    this.buttonDown = this.article.querySelector(".btn.down");
    this.postelements = [...this.article.querySelectorAll(".hidden")];

    this.mediaScreen =   window.matchMedia('(min-width: 1025px)')  
    console.log(this.postelements)    

    this.buttonText = this.buttonDown.querySelector("div");
    this.buttonArrow = this.buttonDown.querySelector(".fa-chevron-down")
    this.className = "collapsed";
  
    this.buttonDown.addEventListener("click", this.expandPost.bind(this) )


    }
    changeGrid() {
        if (this.mediaScreen.matches ) {
            toggleClass(this.article, "modyfyGrid")
          }
    }
    changetext(){
        console.log(this.postelements[0].className)
        console.log(typeof this.postelements[0].className)
        if (!this.postelements[0].className.includes(this.className)) {
            this.buttonText.innerText = "Czytaj dalej!"
        }
        else {
            this.buttonText.innerText = "Zwiń"
        }
    }

    rotateArrow(){
        toggleClass(this.buttonArrow, "rotateHorizontal")
    }

    pointsDisplay(){
        toggleClass(this.points, "display")
    }

    p1Extend(){
        toggleClass(this.p1, "autoHeight")
    }


    expandPost(){
        
        for (let i = 0; i < this.postelements.length; i++) {
            toggleClass(this.postelements[i], this.className)
        }
        this.changeGrid();
        this.changetext();
        this.rotateArrow();
        this.pointsDisplay();
        this.p1Extend();
    }


}

