export const deleteBtns = [...document.querySelectorAll(".btn.delete")];

export class DeletePost {
    constructor() {
        deleteBtns.forEach(element => {
            element.addEventListener("click", this.deletePostFunction.bind(this));
          })
    }


    deletePostFunction = (event) => {
        const article = event.target.parentNode.parentNode;
         const articleId = article.id;
         console.log(articleId);
     article.remove();
     
       }
}



    
    