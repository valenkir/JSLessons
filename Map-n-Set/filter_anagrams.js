let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

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

    let isAnagram;

    for (item of clearedArr) {

        item = item.toLowerCase();

        if (item.length != str.length) {
            continue;
        } else {
            for (letter of str) {
                letter = letter.toLowerCase();

                if (item.includes(letter)) {
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

