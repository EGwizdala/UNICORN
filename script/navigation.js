export class Navigation {
    introArrow() {
        const introArrow = document.querySelector(".request-loader");

        introArrow.onclick =  function () {
            location.href="index.html#article";
        };
    }
}

