

function countSheeps(list) {
    const sheepCount = list.filter(boolean).leght;
    if (sheepCount > 0) {
        return `there are ${sheepCount} sheep in total`;
    }
    
    else {
        return `<p>UPS!!! Wolf eaten Sheeps</p>`;
    }

 }

 //console.log(countSheeps)[true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]

 //console.log(countSheeps)([false, false, false])
 