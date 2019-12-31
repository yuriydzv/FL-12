function isLeapYear(date) {
    let year = (new Date(date));

    if (!isNaN(year)) {
        year = year.getFullYear();

        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return `${year} is a leap year`
        } else {
            return `${year} is not a leap year`
        }
    } else {
        return year;
    }
}
isLeapYear();