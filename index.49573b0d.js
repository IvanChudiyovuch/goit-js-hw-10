var e;({input:document.querySelector("#search-box")}).input.addEventListener("input",(function(e){e.currentTarget.value})),(e="ukraine",fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>e.json()))).then((e=>{console.log(e)}));
//# sourceMappingURL=index.49573b0d.js.map
