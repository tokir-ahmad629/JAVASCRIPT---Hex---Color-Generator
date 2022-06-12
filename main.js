let button = document.querySelector("#button"),
    output = document.querySelector("#output"),
    container = document.querySelector("#container");



colorChang = () => {
    
    const colorGenator = Math.floor(Math.random() * 16777215).toString(16);
          container.style.backgroundColor = `#${colorGenator}`;
          output.innerText = `#${colorGenator}`;

} 


button.addEventListener("click", colorChang);