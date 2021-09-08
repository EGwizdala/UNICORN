export const changeModalContent = (article, postElements) => {
    const postContent = {
        h2: article.querySelector('h2').innerText,
        h4: article.querySelector('h4').innerText,
        p1: article.querySelector('.p1').innerText,
        lat: article.querySelector('.routeMap').dataset.lat,
        long: article.querySelector('.routeMap').dataset.long,
      }
      

      //change modal content
      for (let i = 0; i < Object.keys(postContent).length; i++) {
        if(Object.keys(postContent)[i] === Object.keys(postElements)[i]){
          Object.values(postElements)[i].value = Object.values(postContent)[i];
          // console.log(Object.keys(this.postContent)[i], Object.keys(postElements)[i])
        }
      }
}

export const overwritePost = (article, postElements) => {
    article = document.querySelector(article);
    article.querySelector('h2').innerText = postElements.h2.value;
    article.querySelector('h4').innerText = postElements.h4.value;
    article.querySelector('.p1').innerText = postElements.p1.value;
    article.querySelector('.routeMap').dataset.lat = postElements.lat.value;
    article.querySelector('.routeMap').dataset.long = postElements.long.value;
  
  
  }