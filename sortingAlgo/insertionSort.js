

async function insertionSortRecCall( arr, ind,time,colors){
    if(ind == arr.length){
      return;
    }
    let i=ind-1;
    while( i>=0 && arr[i].val > arr[i+1].val ){
      await Sleep(time);
      colorSelected(arr,i,ind,colors[1]);
      swap(arr,i,i+1);
      colorUnSelected(arr,i,i+1,colors[0])
      i--;
    }
   
    
    await insertionSortRecCall(arr,ind+1,time,colors);
    }
    
   async function insertionSort( arr,time,colors){
       
    await insertionSortRecCall(arr,0,time, colors);
    
   // return sorted;]
   for(let i=0;i<arr.length;i++){
    await Sleep(time)
    colorSorted(arr,i,colors[2])
   }
   }