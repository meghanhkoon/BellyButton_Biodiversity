console.log(cityGrowths);

// Sort cities in decending order of population growth
console.log("Sort cities in decending order of population growth");
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// select top five cities in terms of growth 
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create separate arrays for the city names and population growths 
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

// Create a bar chart with the arrays 
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
