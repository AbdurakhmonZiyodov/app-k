export default class DateHelper {
  public static _ms = 1000;
  public static _minute = 60 * this._ms;
  private static _hour = 60 * this._minute;
  private static _day = 24 * this._hour;

  private static _getDays = (currentTime: number) =>
    Math.floor(currentTime / this._day);

  private static _getHours = (currentTime: number) =>
    Math.floor((currentTime % this._day) / this._hour);

  private static _getMinutes = (currentTime: number) =>
    Math.floor(((currentTime % this._day) % this._hour) / this._minute);

  public static getRemainingTime = (currentTime: number) => {
    const days = this._getDays(currentTime);
    const hours = this._getHours(currentTime);
    const minutes = this._getMinutes(currentTime);

    const checkTime = () => {
      if (minutes < 0) {
        return ` ${'0'}d: ${'00'}h: ${'00'}min`;
      } else {
        return ` ${days}d: ${hours}h: ${minutes}min`;
      }
    };
    return checkTime();
  };
}
