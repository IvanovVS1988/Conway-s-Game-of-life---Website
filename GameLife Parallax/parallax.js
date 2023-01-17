(function (){
    document.addEventListener("mousemove", parallax);
    const elem = document.getElementById("parallaxeffect");
    console.log(elem)
    function parallax(e){
        let w = window.innerWidth / 2;
        let h = window.innerHeight / 2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let png1 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`
        let png2 = `${50 - (mouseX - w) * 0.03}% ${50 - (mouseY - h) * 0.03}%`
        let png3 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`
        let png4 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`
        let png5 = `${50 - (mouseX - w) * 0.04}% ${50 - (mouseY - h) * 0.04}%`
        let png6 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`
        let png7 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`
        let png8 = `${50 - (mouseX - w) * 0.03}% ${50 - (mouseY - h) * 0.03}%`
        let png9 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`
        let png10 = `${50 - (mouseX - w) * 0.04}% ${50 - (mouseY - h) * 0.04}%`
        let png11 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`
        let png12 = `${50 - (mouseX - w) * 0.03}% ${50 - (mouseY - h) * 0.03}%`

        let x = `${png1}, ${png2}, ${png3}, ${png4}, ${png5}, ${png6}, ${png7}, ${png8}, ${png9}, ${png10}, ${png11}, ${png12}`;
        elem.style.backgroundPosition = x;
    }
})();