export function dataHoraMinutoSegundo(data) {
  const dateObject = new Date(data);
  const humanDateFormat = dateObject.toLocaleString();
  return humanDateFormat;
}

export function getTodayObj() {
  return new Date();
}
// Returns date obj on which you can apply all date methods.
// > Tue Mar 01 2022 10:42:34 GMT+0530 (India Standard Time)
export function getTodayString() {
  return Date();
}
// Returns Date in String format.
// > 'Tue Mar 01 2022 10:43:24 GMT+0530 (India Standard Time)'
export function getTodayMilliSeconds() {
  return Date.now();
}
// > 1646111650943

export function getTodayUtcString() {
  return new Date().toUTCString();
}
// > Tue, 01 Mar 2022 05:14:22 GMT

export function getTodayUtcTZFormat() {
  return new Date().toISOString();
}
// > 2022-03-01T05:14:42.479Z
export function getDateDifference(date1, date2) {
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}

export function getMonthName() {
  return new Date().toLocaleDateString("pt-BR", { month: "short" });
}

export function getDateDDMMYYYY() {
  return new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
// > 03/01/2022

// Using localeString, format: mm/dd/yyyy
export function getDateOnly() {
  return new Date().toLocaleString().split(",")[0];
}
// > 3/1/2022

// > 2022-03-01
export function getTimeCompleteOnly() {
  const date = new Date();
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
// > 17:8:46

// by default locale considered as 'en-US'
export function getTimeOnly() {
  return new Date().toLocaleTimeString();
}
// > 5:10:36 PM

export function getLocaleTimeTimeOnly() {
  return new Date().toLocaleTimeString("pt-BR");
}
// > 17:8:46
export function getTimeInHrsMins() {
  return Intl.DateTimeFormat("pt-BR", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date());
}

export function getTimezoneName() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
// > Asia/Calcutta
export function addDay() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
}
// > Wed Mar 02 2022 18:22:40 GMT+0530 (India Standard Time)
export function subtractDay() {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
}
// > Mon Feb 28 2022 18:23:59 GMT+0530 (India Standard Time)
export function addMonth() {
  const today = new Date();
  const nextMonthToday = new Date();
  nextMonthToday.setMonth(today.getMonth() + 1);
  return nextMonthToday;
}
