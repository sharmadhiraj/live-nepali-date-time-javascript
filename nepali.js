const NEPALI_YEAR_DAYS = Object.freeze(
    [
        [2000, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
        [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
        [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
        [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
        [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
        [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
        [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
        [2081, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        [2082, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2083, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2084, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
        [2085, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
        [2086, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
        [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
        [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
        [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
        [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]
    ]
);

const NEPALI_MONTH_NAMES = [
    "", "बैशाख", "जेष्ठ", "असार", "श्रावन", "भाद्र", "असोज",
    "कार्तिक", "मंग्सिर", "पौष", "माघ", "फाल्गुन", "चैत्र"
];

const ENGLISH_MONTH_NAMES = [
    "", "Baisakh", "Jestha", "Asar", "Srawan", "Bhadra", "Aaswin",
    "Kartik", "Mangsir", "Paush", "Magh", "Falgun", "Chaitra"
];

const NEPALI_DAY_NAMES = [
    "",
    "आइतबार",
    "सोमबार",
    "मंगलबार",
    "बुधबार",
    "बिहिबार",
    "शुक्रबार",
    "शनिबार",
];

const ENGLISH_DAY_NAMES = [
    "",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const EN_TO_NP_DIGITS = {
    "0": "०", "1": "१", "2": "२", "3": "३", "4": "४",
    "5": "५", "6": "६", "7": "७", "8": "८", "9": "९"
};

const GREGORIAN_MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const LEAP_YEAR_MONTH_DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const BASE_ENGLISH_YEAR = 1944;
const BASE_NEPALI_YEAR = 2000;
const BASE_NEPALI_MONTH = 9;
const BASE_NEPALI_DAY = 16;

let previousDate = null;
let clockInterval = null;
let DOM_ELEMENTS = null;


function updateClock() {
    if (!DOM_ELEMENTS) {
        document.addEventListener("DOMContentLoaded", () => {
            initializeDOMElements();
            startClock();
        });
    } else {
        startClock();
    }
}

function initializeDOMElements() {
    DOM_ELEMENTS = {
        englishTime: document.getElementById("TIME_IN_ENGLISH"),
        nepaliTime: document.getElementById("TIME_IN_NEPALI"),
        englishDate: document.getElementById("DATE_IN_ENGLISH"),
        nepaliDate: document.getElementById("DATE_IN_NEPALI"),
    };
}

function startClock() {
    refreshClock();
    if (clockInterval) clearInterval(clockInterval);
    clockInterval = setInterval(refreshClock, 1000);
}

function refreshClock() {
    const now = new Date();

    const timeString =
        padZero(now.getHours()) + ":" +
        padZero(now.getMinutes()) + ":" +
        padZero(now.getSeconds());

    if (DOM_ELEMENTS?.englishTime) DOM_ELEMENTS.englishTime.textContent = timeString;
    if (DOM_ELEMENTS?.nepaliTime) DOM_ELEMENTS.nepaliTime.textContent = convertToNepaliDigits(timeString);

    if (!isSameCalendarDay(previousDate, now)) {
        const dateParts = convertToNepaliDate(
            now.getFullYear(),
            now.getMonth() + 1,
            now.getDate()
        );

        if (DOM_ELEMENTS?.englishDate) DOM_ELEMENTS.englishDate.textContent = dateParts[0];
        if (DOM_ELEMENTS?.nepaliDate) DOM_ELEMENTS.nepaliDate.textContent = dateParts[1];
    }
    previousDate = new Date(now.getTime());
}

function isSameCalendarDay(date1, date2) {
    if (!(date1 instanceof Date && date2 instanceof Date)) return false;
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
}

function isGregorianLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function convertToNepaliDate(englishYear, englishMonth, englishDay) {
    if (!isDateSupported(englishYear, englishMonth, englishDay)) {
        return ["Invalid date", "अवैध मिति"];
    }

    let totalEnglishDays = 0;
    let weekday = 7;

    for (let y = BASE_ENGLISH_YEAR; y < englishYear; y++) {
        const months = isGregorianLeapYear(y) ? LEAP_YEAR_MONTH_DAYS : GREGORIAN_MONTH_DAYS;
        totalEnglishDays += months.reduce((sum, d) => sum + d, 0);
    }

    const monthsThisYear = isGregorianLeapYear(englishYear) ? LEAP_YEAR_MONTH_DAYS : GREGORIAN_MONTH_DAYS;
    for (let m = 0; m < englishMonth - 1; m++) {
        totalEnglishDays += monthsThisYear[m];
    }

    totalEnglishDays += englishDay - 1;

    let nepYear = BASE_NEPALI_YEAR;
    let nepMonth = BASE_NEPALI_MONTH;
    let nepDay = BASE_NEPALI_DAY;
    let nepMonthIndex = BASE_NEPALI_MONTH - 1;
    let yearIndex = 0;

    while (totalEnglishDays > 0) {
        nepDay++;
        weekday++;

        const daysInNepMonth = NEPALI_YEAR_DAYS[yearIndex][nepMonth];
        if (nepDay > daysInNepMonth) {
            nepDay = 1;
            nepMonth++;
            nepMonthIndex++;
        }

        if (weekday > 7) weekday = 1;
        if (nepMonth > 12) {
            nepMonth = 1;
            nepYear++;
        }
        if (nepMonthIndex > 12) {
            nepMonthIndex = 1;
            yearIndex++;
        }
        totalEnglishDays--;
    }

    const englishDateStr = `${nepYear} ${ENGLISH_MONTH_NAMES[nepMonth]} ${nepDay}, ${ENGLISH_DAY_NAMES[weekday]}`;
    const nepaliDateStr = `${nepYear} ${NEPALI_MONTH_NAMES[nepMonth]} ${nepDay}, ${NEPALI_DAY_NAMES[weekday]}`;

    return [englishDateStr, convertToNepaliDigits(nepaliDateStr)];
}


function isDateSupported(year, month, day) {
    if (year < 1944 || year > 2033) {
        return false;
    }
    if (month < 1 || month > 12) {
        return false;
    }
    const daysInMonth = (isGregorianLeapYear(year) ? LEAP_YEAR_MONTH_DAYS : GREGORIAN_MONTH_DAYS)[month - 1];
    return day >= 1 && day <= daysInMonth;
}


function padZero(n) {
    return n.toString().padStart(2, "0");
}


function convertToNepaliDigits(str) {
    return str.replace(/\d/g, d => EN_TO_NP_DIGITS[d]);
}