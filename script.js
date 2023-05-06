(function(){
    function createElement(){
        const container=document.querySelector(".container");
        const element=document.createElement("span");
        const size =Math.random()*50;

        element.style.width=20 + size +"px";
        element.style.height=20 + size +"px";
        element.style.left=Math.random() * innerWidth +"px";
        container.appendChild(element);
        console.log(size);

        setTimeout(()=>{
            element.remove();

    },4000);
    }
    setInterval(createElement,50);
})();