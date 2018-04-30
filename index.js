const slider = document.querySelector('.items');
let isDown = false;
//not given any values to use later
let startX;
let scrollLeft; 

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    //console.log(e) //to see what can be passed!
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
        if(!isDown) return; //stops the function from running
    // console.log(isDown);
        e.preventDefault(); //to prevent resets
        const x = e.pageX - slider.offsetLeft //to know where the mouse is
        const walk = (x - startX) * 3; //to set a point then have the mouse deviate from that point to scroll. 
        slider.scrollLeft = scrollLeft - walk;

});
