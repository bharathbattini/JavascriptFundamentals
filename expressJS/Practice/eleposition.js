let ele = [12, 31, 45, 65, 21];

function search(fin) {

    for (i = 0; i < ele.length; i++) {
        if (ele[i] == fin) {
            console.log('Element Found at ' + i + ' index');
        }
    }

}
search(45);
