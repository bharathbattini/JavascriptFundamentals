

let firstWord = 'aabbccddeeffg';

function nonrepitative(word) {

    let arr = word.split('');
    arr.forEach(element => {

        console.log(element);

    });

    var final = [];

    let m = arr.filter(x => x).ToList();

    // arr.forEach(element => {

    //     console.log(element);
    //     if (final == []) {
    //         final.push({
    //             element, cnt: 1
    //         });
    //     } else if (final.find(x => x.element == element).length() > 0) {
    //         final.find(x => x.element == element).cnt++;
    //     } else {
    //         final.push({
    //             element, cnt: 1
    //         });
    //     }

    // });




}

nonrepitative(firstWord);