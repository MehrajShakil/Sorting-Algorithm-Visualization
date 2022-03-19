async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'red';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'blue';

            await waitforme(delay);
            if(parseInt(ele[j].innerHTML) < parseInt(ele[min_index].innerHTML)){
                console.log('In if condition height comparision');

                ele[min_index].style.height = "70px";
                ele[min_index].style.width = "70px";

                await waitforme(delay);

                ele[min_index].style.height = "60px";
                ele[min_index].style.width = "60px";

               // if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'black';
              //  }
                    
                min_index = j;
                ele[min_index].style.background = 'red';
                await waitforme(delay);
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'black';
            }
             
        }
        await waitforme(delay);

        let temp = ele[min_index].innerHTML;
        ele[min_index].innerHTML = ele[i].innerHTML;
        ele[i].innerHTML = temp;

        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'black';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
        
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});