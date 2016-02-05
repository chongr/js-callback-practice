function Clock () {
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  this.date = new Date();
  this.printTime(); 
  setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  console.log(this.date.getHours() + ":" + this.date.getMinutes()
                + ":" + this.date.getSeconds());
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  var currentSeconds = this.date.getSeconds();
  var updatedSeconds = currentSeconds + 1;
  this.date.setSeconds(updatedSeconds);
  this.printTime();
};

var clock = new Clock();
