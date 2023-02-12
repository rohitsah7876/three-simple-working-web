const Btn = document.querySelector(".btn");
const Content = document.querySelector(".content");


const createAndShowImg = () => {

    for (let i = 0; i < 10; i++) {
        const imgages = document.createElement("img");
        imgages.src = `https://picsum.photos/400/300/?random?=${Math.floor(Math.random() * 2000)}`;
        Content.appendChild(imgages);
    }
}

Btn.addEventListener("click", () => {
    createAndShowImg();
});

Content.addEventListener("scroll",(e) => {
    console.log(Content.scrollTop - Content.offsetTop , " scroll position from top");
    console.log(Content.scrollHeight, " scrollbar hieght");
})
