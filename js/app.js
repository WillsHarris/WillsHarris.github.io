
var newText = "Here, Intensity and Frequency Correlation are both zero. In this case, e cross correlation matrix and the patterns seen along on the diagonal are similar to the single-peak patterns from above";

var corList=["-","0","+"]
d3.selectAll(".table").on("click", function() {

  d3.selectAll(".table").selectAll("img").style("outline-style", "none")
  d3.select(this).select("img").style("outline-style", "dotted")


  var gridItemLink = d3.select(this).select("img").attr("src");


  // var itemLink = d3.select(".plotReplace").attr("src");
  // console.log(itemLink);
  d3.select(".matrixReplace").attr("src", gridItemLink)
  var gridGifLink = gridItemLink.split(".")[0]+".gif"
  
  d3.select(".plotReplace").attr("src", gridGifLink)

  var linkSplit = gridItemLink.split("")
  var int = linkSplit[linkSplit.length -6];
  var freq = linkSplit[linkSplit.length -5];
  console.log("Grid Element {"+int+", "+freq+"} selected");

  d3.select(".container_3").select(".center").text("Frequency Correlation: "+corList[freq-1]+" Intensity Correlation: "+corList[int-1]);

  var testReplace = d3.select(".description"+int+freq).text()
  d3.select(".textReplace").text(testReplace)

});





