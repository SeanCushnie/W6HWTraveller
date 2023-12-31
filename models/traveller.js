const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
let totalDistanceTravelled = 0;
for (const journey of this.journeys) {
  totalDistanceTravelled += journey.distance;
}
return totalDistanceTravelled
};

Traveller.prototype.getUniqueModesOfTransport = function () {
const uniqueModesOfTransport = new Set(this.journeys.map(journey => journey.transport))
return uniqueModesOfTransport
};

module.exports = Traveller;
