/*复杂度
T = O(nlog(n))
S = O(n)

改进(节省空间)：
merge时采用插入排序
T = O(n^2)
S = O(1)
*/

/*算法流程(分治法(稳定))
1、合：两个有序数组如何进行合并
2、分：得到最小有序数组
*/


function merge(arr, l, m, r){
    // 注意如何截取
    let left = arr.slice(l,m), right = arr.slice(m,r+1);

    let i = 0, j=0, k=l;
    while(i<left.length && j<right.length ){
        if(left[i]<right[j]){
            arr[k] = left[i];
            k++;
            i++
        }else{
            arr[k] = right[j];
            k++;
            j++;
        }
    }
    while(i<left.length){
        arr[k] = left[i];
        k++;
        i++;
    }
    while(j<right.length){
        arr[k] = right[j];
        k++;
        j++;
    }
}

function  mergeSort(arr, l, r){
    if(l === r){
        return;
    }else{
        // 这里一定要加个Math.floor() 原因？直接用/符号是不会取整的
        let m = Math.floor((l+r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        merge(arr, l, m+1, r);
    }
}

let arr = [2,5,3,1,10,4];
mergeSort(arr, 0, arr.length-1)
console.log(arr);
