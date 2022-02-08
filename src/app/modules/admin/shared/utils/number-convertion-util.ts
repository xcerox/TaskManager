const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const ONE_MILLION = 1000000;
const ONE_THOUSAND = 1000;
const ONE_HUNDRED = 100;

const translateMillionsToWords = (value: number): string => {
    let translation;

    if (value >= ONE_MILLION) {
        translation = `${translateMillionsToWords(Math.floor(value / ONE_MILLION))} million ${translateThousandsToWords(value % ONE_MILLION)}`;
    } else {
        translation = translateThousandsToWords(value);
    }

    return translation;
}

const translateThousandsToWords = (value: number): string => {
    let translation;
    if (value >= ONE_THOUSAND) {
        translation = `${translateHundredsToWords(Math.floor(value / ONE_THOUSAND))} thousand ${translateHundredsToWords(value % ONE_THOUSAND)}`;
    } else {
        translation = translateHundredsToWords(value);
    }
    return translation;
}

const translateHundredsToWords = (value: number): string => {
    let translation;
    if (value > 99) {
        translation = `${ones[Math.floor(value / ONE_HUNDRED)]} hundred ${translateHundredsToWords(value % ONE_HUNDRED)}`;
    } else {
        translation = translateTensToWords(value);
    }
    return translation;
}

const translateTensToWords = (value: number): string => {
    let translation;
    if (value < 10) {
        translation = ones[value];
    } else if (value >= 10 && value < 20) {
        translation = teens[value - 10];
    } else {
        translation = `${tens[Math.floor(value / 10)]} ${ones[value % 10]}`;
    }
    return translation;
}

export const translateToWords = (value: number): string => {
    let translation;
    if (value == 0) {
        translation = "zero";
    } else {
        translation = translateMillionsToWords(value);
    }
    return translation;
}


