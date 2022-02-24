/*复杂度
堆调整:O(log(n)
建堆：O(n)
T = O(nlog(n) + n) = O(nlog(n))
S = O(1)
*/

/*算法流程
数组表示完全二叉树 最大堆 最小堆
堆调整heapify：调整传入节点以及其之后子节点的顺序
+建堆：从树的倒数第二层最左边的节点开始，从下往上进行堆调整
+排序：取树的根节点和最后一个节点互换，然后继续堆调正除最后一个节点外的所有节点
*/

// heapify:将传入的节点对应的左节点和右节点进行堆排序，从上而下做递归
// 数组下标：0，1，2 对应树的下标排序：0，1，2
// tree:与数组对应的二叉树 n：数组的长度 i：某节点的下标
function heapify(tree, n, i){
    // 出口
    if(i>=n) {
        return
    }
    c1 = 2*i+1;
    c2 = 2*i+2;
    let max = i;
    if(c1<n && tree[c1]>tree[max]){
        max = c1;
    }
    if(c2<n && tree[c2]>tree[max]){
        max = c2;
    }

    if(max !== i){
        [tree[max], tree[i]] = [tree[i], tree[max]];
        heapify(tree, n, max)
    }
}

// 从乱序中构建一个堆：找到最后一个节点的parent节点
function buildHeap(arr, n){
    let lastNode = n-1;//找到的是树的倒数第二层最左边的节点，然后从下往上
    let parent = (lastNode-1)/2;
    for(let i = parent; i>=0; i--){
        heapify(arr, n, i);//这个函数内部是从上往下 
    }
}

function heapSort(arr, n){
    // 建立好堆之后
    buildHeap(arr, n);

    // 从下而上，做排序
    for(let i= n-1; i>=0; i--){
        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(arr, i, 0);
    }n
}


// 此处用数组代表完全二叉树
let arr = [2,5,3,1,10,4];
//进行堆排序
heapSort(arr, arr.length);
console.log(arr);