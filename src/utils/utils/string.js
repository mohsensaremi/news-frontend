export const htmlSubstring = (s, n, add = '') => {
    var m, r = /<([^>\s]*)[^>]*>/g,
        stack = [],
        lasti = 0,
        result = '';

    //for each tag, while we don't have enough characters
    while ((m = r.exec(s)) && n) {
        //get the text substring between the last tag and this one
        var temp = s.substring(lasti, m.index).substr(0, n);
        //append to the result and count the number of characters added
        result += temp;
        n -= temp.length;
        lasti = r.lastIndex;

        if (n) {
            result += m[0];
            if (m[1].indexOf('/') === 0) {
                //if this is a closing tag, than pop the stack (does not account for bad html)
                stack.pop();
            } else if (m[1].lastIndexOf('/') !== m[1].length - 1) {
                //if this is not a self closing tag than push it in the stack
                stack.push(m[1]);
            }
        }
    }

    //add the remainder of the string, if needed (there are no more tags in here)
    result += s.substr(lasti, n);

    var extra = s.substr(result.length);
    var lastSpace = extra.indexOf(" ");
    if (lastSpace >= 0) {
        result += s.substr(result.length, lastSpace);
    }

    //fix the unclosed tags
    if (stack.length == 0) {
        result += add;
    }

    while (stack.length) {
        if (stack.length == 1) {
            result += add;
        }
        result += '</' + stack.pop() + '>';
    }

    return result;

};

export const stripHtmlTags = (html) => {
    let div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};

export const substringWithSpace = (text, length, withDots = false) => {
    let temp = text.substr(0, length);
    const temp2 = text.substr(length);
    const spaceIndex = temp2.indexOf(' ');
    if (spaceIndex > 0) {
        temp += temp2.substr(0, spaceIndex);
    }
    if (withDots && text.length > length) {
        temp += '...';
    }
    return temp;
};


export const strRandom = (length = 10) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

export const numberToStringTh = (arg) => {
    arg = parseInt(arg);
    switch (arg) {
        case 1:
            return 'اول';
        case 2:
            return 'دوم';
        case 3:
            return 'سوم';
        case 4:
            return 'جهارم';
        case 5:
            return 'پنجم';
        case 6:
            return 'ششم';
        case 7:
            return 'هفتم';
        default:
            return '';
    }
};

export const ucfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const camelCase = (string) => {
    return string.replace(/-([a-z])/ig, function (all, letter) {
        return letter.toUpperCase();
    });
};

const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

export const toEnglishDigits = function (str) {
    if (typeof str === 'string') {
        for (let i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    return str;
};

export const KmText = (arg) => {
    return `${parseFloat(arg).toFixed(2)} کیلومتر`;
};

export const minuteText = (arg) => {
    return `${(parseFloat(arg) / 60).toFixed(0)} دقیقه`;
};

export const objectToQueryString = (obj) => {
    return Object.entries(obj)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
};

export const objectToQueryStringSorted = (obj) => {
    return Object.entries(obj)
        .sort(([key1], [key2]) => key1.localeCompare(key2))
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
};
