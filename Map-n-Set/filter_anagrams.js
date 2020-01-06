function aclean(arr) {

    let cleared = [];
    let isEquel = false;

    for  (str of arr) {

        if (cleared.length != 0) {
            isEquel = isAnagram(str, cleared);
        }

        if(!isEquel) {
            cleared.push(str);
        }

    }

    return cleared;
}

function isAnagram(str, clearedArr) {

    let isAnagram = false;

    for (item of clearedArr) {

        if (item.length != str.length) {
            continue;
        } else {
            for (letter of str) {
                if (item.toLowerCase().includes(letter.toLowerCase())) {
                    isAnagram = true;
                } else {
                    isAnagram = false;
                    continue;
                }
            }
        }
    }

    return isAnagram;
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"