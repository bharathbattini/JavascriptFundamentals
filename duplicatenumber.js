const arr = [1, 3, 4, 5, 6, 5]
let seen = {}
function duplicate(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (seen[arr[i]]) {
            console.log('Duplicate number is ' + arr[i]);
        }
        else {
            seen[arr[i]] = true;
        }

    }
}

duplicate(arr);