var trace = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};

var data = [trace];

var layout = {
    title: "Scatter Plot",
}

Plotly.newPlot("plotArea", data, layout);