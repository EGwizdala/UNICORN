import { toggleClass } from './library.js';
import {postElements } from './add-post.js';
import { changeModalContent, overwritePost } from './modify-post.js';
// 'use strict';
//MODAL FILE LOAD
// ( function ( document, window, index )
// {
// 	const inputs = document.querySelectorAll( '.inputfile' );
// 	Array.prototype.forEach.call( inputs, function( input )
// 	{
//     const label = input.nextElementSibling,
// 			labelVal = label.innerHTML;
// 		input.addEventListener( 'change', function( e )
// 		{
// 			let fileName = '';
// 			if( this.files && this.files.length > 1 )
// 				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
// 			else
// 				fileName = e.target.value.split( '\\' ).pop();

// 			if( fileName )
// 				label.querySelector( 'span' ).innerHTML = fileName;
// 			else
// 				label.innerHTML = labelVal;
// 		});

// 		// Firefox bug fix
// 		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
// 		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
// 	});
// }(document, window, 0));
export let anchor = true;
export const editBtns = [...document.querySelectorAll(".btn.edit")];

export class OpenModalWindow {
  constructor() {
    this.form = document.querySelector('form')
    this.addBtn = document.querySelector(".postBtn")
    this.btnOpen = document.querySelector('.js-open');
    this.btnClose = document.querySelector('.js-close');
    this.btnX = document.querySelector('.close');
    this.modal = document.querySelector('.modal');
    this.modalChildren = document.querySelectorAll('.js-modal');
    // this.editBtns = [...document.querySelectorAll(".btn.edit")];
    this.currentId = "";
    this.addBtn.addEventListener("click", this.openModal.bind(this));

    // this.editBtn.addEventListener("click", this.editModal.bind(this));
    editBtns.forEach(element => {
      element.addEventListener("click", this.editModal.bind(this));
    });
    this.btnClose.addEventListener('click', this.closeModal.bind(this));
   
    this.btnX.addEventListener('click', this.closeModal.bind(this));

     
    }

   
    hideModal() {
        dynamics.animate(this.modal, {
          opacity: 0,
          translateY: 100
        }, {
          type: dynamics.spring,
          frequency: 50,
          friction: 600,
          duration: 1500
        });
      } 
    showModal() {
        // Define initial properties
        dynamics.css(this.modal, {
          opacity: 0,
          scale: .5,
        
        });
        // Animate to final properties
        dynamics.animate(this.modal, {
          opacity: 1,
          scale: 1,
          translateX: "100vw"
        }, {
          type: dynamics.spring,
          frequency: 300,
          friction: 400,
          duration: 1000
        });
      }
    showBtn() {
        dynamics.css(this.btnOpen, {
          opacity: 0
        });
        
        dynamics.animate(this.btnOpen, {
          opacity: 1
        }, {
          type: dynamics.spring,
          frequency: 300,
          friction: 400,
          duration: 800
        });
      }
      
    showModalChildren() {
        // Animate each child individually
        for(let i=0; i<this.modalChildren.length; i++) {
          let item = this.modalChildren[i];
          // Define initial properties
          dynamics.css(item, {
            opacity: 0,
            translateY: 30
          });
          // Animate to final properties
          dynamics.animate(item, {
            opacity: 1,
            translateY: 0
          }, {
            type: dynamics.spring,
            frequency: 300,
            friction: 400,
            duration: 1000,
            delay: 100 + i * 40
          });
        } 
      }
       
    toggleClasses() {
      toggleClass(this.btnOpen, 'is-active');
      toggleClass(this.modal, 'is-active');
      toggleClass(this.modal, 'display');
    } 
  
  
  openModal() {
      this.form.reset();
      this.btnClose.value = "Dodaj wpis";
      anchor = true
      this.toggleClasses();
      this.showModal();
      this.showModalChildren();
    }

    editModal(event) {
      this.article = event.target.parentNode.parentNode;
      this.article.dataset.edition = "is-active";
      this.btnClose.value = "Zapisz zmiany";
      this.articleId = this.article.id;
      console.log(event);
      anchor = false;
      this.toggleClasses();
     
      changeModalContent(this.article, postElements);
      this.showModal();
      this.showModalChildren();

      this.currentId = this.articleId;
    }
  
    closeModal() {
      this.hideModal();
      this.toggleClasses();
      this.showBtn();
  

      if (!anchor) {
        
    
        console.log(anchor);
        console.log(this.currentId);
        overwritePost(`#${this.currentId}`, postElements)
      }
      
    }

    
    
  }

