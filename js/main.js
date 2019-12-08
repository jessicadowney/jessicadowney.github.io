$(document).ready(function() {


var jdfaces = [{{ site.url }}/"/images/jdwave.gif", {{ site.url }}/"/images/jdwink.gif"];


$( ".gifportrait" ).hover(function() {

	$(".gifportrait").attr("src", jdfaces[Math.floor(Math.random()*jdfaces.length)])


})



});