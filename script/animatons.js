const arrowLeft = document.querySelector(".fa-chevron-right");
const exclamation = document.querySelector(".fa-exclamation");
export class Animations {
    constructor() {
        this.arrowLeft = document.querySelector(".fa-chevron-right");
        this.exclamation = document.querySelector(".fa-exclamation");
    }
    
    arrowMoveLeft() {
        arrowLeft.classList.add("animateLeftArrow")
    }

    exclamationShake() {
        exclamation.classList.add("animateExclamation")
    }

    removeArrowMoveLeft() {
        arrowLeft.classList.remove("animateLeftArrow")
    }

    removeExclamationShake() {
        exclamation.classList.remove("animateExclamation")
    }


    

}