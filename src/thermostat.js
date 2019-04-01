function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.increaseTemperature = function(value) {
  this.temperature += value;
};

Thermostat.prototype.decreaseTemperature = function(value) {
  this.temperature -= value
};