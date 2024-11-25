const arr = [1, 2, 34, 5, 6]
let maxi = arr[0];

function max(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > maxi) {
            maxi = arr[i]
        }
        // return max;
    }
    console.log(maxi)
}
max(arr);
