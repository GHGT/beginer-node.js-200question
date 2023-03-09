const sumNumbers = (start, end, accumulator) => {
    if (start > end) return accumulator;
    return sumNumbers(start + 1, end, accumulator + start);
};
console.log('result:', sumNumbers(1, 10, 0));