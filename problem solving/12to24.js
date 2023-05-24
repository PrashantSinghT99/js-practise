

// 01:02 PM  -  13:02 PM  

// 12 HRS  00

const covert12to24 = (timeformat) => {
    const [time, format] = timeformat.split(" ");

    let [hrs, min] = time.split(":");

    if (hrs == "12") hrs = "00";

    if (format == "PM") hrs = parseInt(hrs) + 12;

    return `${hrs}:${min}`;

}

console.log(covert12to24("02:02 PM"));

console.log(covert12to24("04:06 PM"));

console.log(covert12to24("12:00 PM"));

console.log(covert12to24("12:00 AM"));



