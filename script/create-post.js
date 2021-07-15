export let mapCounter = 2;

export class createPost {
    
    addPostToHTML(post) {
    const parent = document.querySelector('main');
    const article = document.createElement('article');
    article.id = `article${mapCounter}`;
      


    const date = document.createElement('time');
    date.innerText = post.date;
    article.appendChild(date);
      
    const destination = document.createElement('h4');
    destination.innerText = post.destination;
    article.appendChild(destination);
  
    const header = document.createElement('h2');
    header.innerText = post.header;
    article.appendChild(header);  
  
    const postImg = document.createElement('div');
    postImg.className = "postImg"; 
    const img = document.createElement('img');
    img.src = `img/post/borowo2.jpg`;
    postImg.appendChild(img);
    article.appendChild(postImg);
  
    const text = document.createElement('div');
    text.className = "p1";
    text.innerText = post.text;
    article.appendChild(text);

    const points = document.createElement('div');
    points.className = "points";
    const dots = document.createElement('div');
    dots.innerText = "....."
    points.appendChild(dots);
    article.appendChild(points);
    
      


    const routeMap = document.createElement('div');
    routeMap.className = "routeMap hidden elemDisplay";
    routeMap.style.height = "400px";
    routeMap.style.width = "100%";
    routeMap.id = `routeMap${mapCounter}`;
    routeMap.dataset.lat = post.latitude;
    routeMap.dataset.long = post.longitude;
    article.appendChild(routeMap);

    mapCounter++;
  
    const caption = document.createElement('div');
    caption.className = "mapCaption hidden elemDisplay";
    const span1 = document.createElement('span');
    span1.innerText = "Trasa:"
    caption.appendChild(span1);
    const span2 = document.createElement('span');
    span2.innerText = post.destination;
    caption.appendChild(span2);
    article.appendChild(caption);
      
    const text2 = document.createElement('p');
    text2.className = "p2 hidden elemDisplay";
    
    article.appendChild(text2);

  
    const postImgs = document.createElement('div');
    postImgs.className = "slider hidden elemDisplay"; 
    const imgs = document.createElement('img');
    imgs.src = `img/post/borowo2.jpg`;
    postImgs.appendChild(imgs);
    article.appendChild(postImgs);
   
      
    const text3 = document.createElement('p');
    text3.className = "p3 hidden elemDisplay";
    text3.innerText = post.story;
    article.appendChild(text3);
   

    const buttonEdit = document.createElement('button');
    buttonEdit.className = "btn edit hidden elemDisplay";
    buttonEdit.type = "button";
    const buttonEditDiv = document.createElement('div');
    buttonEditDiv.innerText = "Edytuj!";
    const buttonEditIcon = document.createElement('i');
    buttonEditIcon.className = "fas fa-pen";
    buttonEdit.appendChild(buttonEditDiv);
    buttonEdit.appendChild( buttonEditIcon); 
    article.appendChild(buttonEdit);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = "btn delete hidden elemDisplay";
    buttonDelete.type = "button";
    const buttonDeleteDiv = document.createElement('div');
    buttonDeleteDiv.innerText = "Usuń!";
    const buttonDeleteIcon = document.createElement('i');
    buttonDeleteIcon.className = "fas fa-trash";
    buttonDelete.appendChild(buttonDeleteDiv);
    buttonDelete.appendChild(buttonDeleteIcon); 
    article.appendChild(buttonDelete);
      
    const button = document.createElement('button');
    button.className = "btn down";
    button.type = "button down";
    const btnDiv = document.createElement('div');
    btnDiv.innerText = "Czytaj dalej!";
    const btnIcon = document.createElement('i');
    btnIcon.className = "fas fa-chevron-down";
    button.appendChild(btnDiv);
    button.appendChild(btnIcon); 
    article.appendChild(button);
      
  
    parent.appendChild(article);
  
    }
    
  }