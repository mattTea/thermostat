describe("Thermostat", function() {
  let thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("increases temperature by 1", function() {
    thermostat.increaseTemperature(1)
    expect(thermostat.temperature).toEqual(21);
  });

});