function bubbleChart() {
    var width = 940,
        height = 940,
        maxRadius = 30,
        columnForColors = "Reason",
        columnForRadius = "Number";

    function chart(selection) {
        var data = selection.enter().data();
        var div = selection,
            svg = div.selectAll('svg');
        svg.attr('width', width).attr('height', height);

        var tooltip = selection
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("color", "#424242")
            .style("padding", "8px")
            .style("background-color", "#BDBDBD")
            .style("border-radius", "16px")
            .style("text-align", "center")
            .style("font-family", "monospace")
            .style("width", "300px")
            .text("");

        var simulation = d3.forceSimulation(data)
            .force("charge", d3.forceManyBody().strength([-90]))
            .force("x", d3.forceX())
            .force("y", d3.forceY())
            .on("tick", ticked);

        function ticked(e) {
            circles.attr("cx", function(d) {
                    return d.x;
                })
                .attr("cy", function(d) {
                    return d.y;
                });

            labels.attr("x", function(d) {
                    return d.x;
                })
                .attr("y", function(d) {
                    return d.y;
                });
        }

        // var colorCircles = d3.scaleOrdinal(d3.schemeCategory10);
        var colorCircles = d3.scaleOrdinal()
            .domain(["Carrier", "Weather", "National Air System", "Security"])
            .range(["#009688",  "#FFB300", "#1E88E5" ,"#C62828"]);

        var scaleRadius = d3.scaleLinear().domain([d3.min(data, function(d) {
            return +d[columnForRadius];
        }), d3.max(data, function(d) {
            return +d[columnForRadius];
        })]).range([5, 35])

        var nodes = svg.selectAll("circle")
            .data(data)
            .enter();

       var circles =
            nodes.append("circle")
            .attr('r', function(d) {
                return scaleRadius(d[columnForRadius])
            })
            .style("fill", function(d) {
                return colorCircles(d[columnForColors])
            })
            .attr('transform', 'translate(' + [width / 2, height / 2] + ')')
            .on("mouseover", function(d) {
                tooltip.html("Airline: " +  d.Airline + "<br>" + "Reason for cancelation: " +  d[columnForColors] + "<br>" +  " Number of cancelations: " + d[columnForRadius] );

                return tooltip.style("visibility", "visible");
            })
            .on("mousemove", function() {
                return tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
            })
            .on("mouseout", function() {
                return tooltip.style("visibility", "hidden");
            });

        // add airline names as label:
        var labels = 
            nodes.append("text")
            .attr("x", function(d){ return d.x; })
            .attr("y", function(d){ return d.y   ; })
            .attr("text-anchor", "middle")
            .text(function(d){ return d.AirLineAbbr; })
            .style("fill","black")
            .style("font-family","Helvetica Neue, Helvetica, Arial, san-serif")
            .style("font-size", "10px")
            .attr('transform', 'translate(' + [width / 2, height / 2] + ')');
        

        var svgContainer = d3.select("body").append("svg")
            .attr("width", 1200)
            .attr("height", 1200)

        var legend = svgContainer.append("g")
            .attr("class", "legend")
            .selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
                // console.log(d)
                return "translate(" +  10 + "," + i * 20 + ")";
            })

        legend.append("rect")
            .attr("width", 8)
            .attr("height", 8)
            .style("fill", function(d) { return colorCircles(d.Reason) });

       // This is where you change the contents of the legend
       // in console, you can see the options from the 'console.log(d)' statement
        legend.append("text")
            .attr("x", function(d, i) { return 10; })
            .attr("dy", "0.50em")
            .text(function(d) { console.log(d); var thisText =  d.Reason; console.log(d); return thisText; })
   
    }


    chart.width = function(value) {
        if (!arguments.length) {
            return width;
        }
        width = value;
        return chart;
    };

    chart.height = function(value) {
        if (!arguments.length) {
            return height;
        }
        height = value;
        return chart;
    };


    chart.columnForColors = function(value) {
        if (!arguments.columnForColors) {
            return columnForColors;
        }
        columnForColors = value;
        return chart;
    };

    chart.columnForRadius = function(value) {
        if (!arguments.columnForRadius) {
            return columnForRadius;
        }
        columnForRadius = value;
        return chart;
    };

    return chart;
}