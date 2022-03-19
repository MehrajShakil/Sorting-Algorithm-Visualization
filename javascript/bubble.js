async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            console.log(ele[j].innerHTML);
            let pre = ele[j].style.background;
            if(parseInt(ele[j].innerHTML) > parseInt(ele[j+1].innerHTML)){
               
                console.log('In if condition');
                ele[j].style.height = "70px";
                ele[j].style.width = "70px";

                await waitforme(delay);
               
                ele[j].style.background = 'red';
                ele[j+1].style.background = 'red';
                let temp = ele[j+1].innerHTML;
                ele[j+1].innerHTML = ele[j].innerHTML;
                ele[j].innerHTML = temp;
               
                ele[j].style.height = "60px";
                ele[j].style.width = "60px";
                ele[j+1].style.height = "70px";
                ele[j+1].style.width = "70px";
            }
            await waitforme(delay);

             ele[j+1].style.height = "60px";
             ele[j+1].style.width = "60px";

             ele[j].style.background = "#000";
             ele[j+1].style.background = "#000";
        }
        ele[ele.length-1-i].style.background = 'green';
        await waitforme(delay);
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    let cur = document.querySelector('.who');
    cur.innerHTML = "Bubble Sort";
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});