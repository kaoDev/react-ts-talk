export default class DateTime {
  date: Date;
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  constructor(date?: Date) {
    this.date = date ? date : new Date();
  }

  hours() {
    return this.formatUnitOfTime(this.date.getHours());
  }

  minutes() {
    return this.formatUnitOfTime(this.date.getMinutes());
  }

  seconds() {
    return this.formatUnitOfTime(this.date.getSeconds());
  }

  dayOfWeek() {
    return this.dayNames[this.date.getDay()];
  }

  dayOfMonth() {
    return this.formatUnitOfTime(this.date.getUTCDate());
  }

  month() {
    return this.monthNames[this.date.getMonth()];
  }

  year() {
    return `${this.date.getFullYear()}`;
  }

  formatUnitOfTime(unitOfTime: number) {
    return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
  }

  static toDateString(date: Date) {
    var dateTime = new DateTime(date);

    return `${dateTime
      .dayOfWeek()
      .substring(
        0,
        3
      )} ${dateTime.dayOfMonth()} ${dateTime.month()} ${dateTime.year()}`;
  }

  static toTimeString(date: Date) {
    var dateTime = new DateTime(date);

    return `${dateTime.hours()}:${dateTime.minutes()}:${dateTime.seconds()}`;
  }
}
