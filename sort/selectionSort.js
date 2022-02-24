/*复杂度
T = O(n^2)
S = O(1)
*/

//找到最大值的位置

/*算法流程
找到一个最大值和最后一个一个值交换，
i代表逐渐缩小的范围，
j代表遍历寻找最大值的过程
*/

function selectionSort(arr){
    for(let i = arr.length-1; i>0; i--){
        let idx = i;
        for(let j=0; j<i; j++){
            if(arr[j]>arr[idx]){
                idx = j;
            }
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]]
    }
    return arr
}

let arr = [3,4,7,6,2,1];
arr = selectionSort(arr);
console.log(arr)