const box = document.querySelector(".box");
const Gen = document.querySelector(".gen");
const heading = document.querySelector(".margin");

    for (let i = 0; i < 30; i++) {
        let colorDiv = document.createElement("div");
        colorDiv.classList.add("color-container");
        box.appendChild(colorDiv);
    }

const color_Container = document.querySelectorAll(".color-container");
const IndivShowColor = () => {
    color_Container.forEach((item) => {
        let colorcode = "#"+GenerateAndshow();
        item.style.backgroundColor = colorcode;
        item.innerText = colorcode;

        const Btn = document.createElement("button");
        Btn.classList.add("btn");
        Btn.innerText = "Copy";
        item.appendChild(Btn);
    });
}


const GenerateAndshow = () => {
    let colorCode = "0123456789ABCDEF";
    let ColorArray = [];

    for (let i = 0; i < 6; i++) {
        let Choserandom = Math.floor(Math.random() * colorCode.length);
        ColorArray.push(colorCode.slice(Choserandom, Choserandom + 1));
    }
    let getColor = ColorArray.join("");
    return getColor;
}


const copyColor = () => {
    const BTN = document.querySelectorAll(".btn");

    for(let i = 0; i < BTN.length; i++){
        BTN[i].addEventListener("click", () => {
            const getInnerText = color_Container[i].innerText.slice(0,7);

            navigator.clipboard.writeText(getInnerText);
            heading.innerText = `Copied! : ${getInnerText}`;
            heading.style.color = getInnerText;
        })
    }
}


Gen.addEventListener("click",() => {
    IndivShowColor();
    copyColor();
});