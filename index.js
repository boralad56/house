$(document).ready (function($) {
  console.log("JS FIRED")
  xively.setKey( "IPMdQlqEtGmcy5WxkrzD4KL6jTNqq1mSeVNkebgdOMntYsh3" );
  console.log("Key found. Setting JQuery")

  var feedID = 1579988059,
      wu_hum = "#hum";
      wu_temp = "#temp";
      wu_weath = "#weather";
      wu_uv = "#uv"
      t1 = "#t1"
      h1 = "#h1"
      t2 = "#t2"
      h2 = "#h2"
      t3 = "#t3"
      h3 = "#h3"
      t4 = "#t4"
      h4 = "#h4"
      t5 = "#t5"
      h5 = "#h5"
      t6 = "#t6"
      h6 = "#h6"
      t7 = "#t7"
      h7 = "#h7"

  xively.feed.get (feedID, function ( datastream ) {
   $(wu_hum).html(datastream["datastreams"]["0"]["current_value"]);
   $(wu_temp).html(datastream["datastreams"]["1"]["current_value"]);
   $(h1).html(datastream["datastreams"]["2"]["current_value"]);
   $(h2).html(datastream["datastreams"]["3"]["current_value"]);
   $(h3).html(datastream["datastreams"]["4"]["current_value"]);
   $(h4).html(datastream["datastreams"]["5"]["current_value"]);
   $(h5).html(datastream["datastreams"]["6"]["current_value"]);
   $(h6).html(datastream["datastreams"]["7"]["current_value"]);
   $(h7).html(datastream["datastreams"]["8"]["current_value"]);
   $(t1).html(datastream["datastreams"]["9"]["current_value"]);
   $(t2).html(datastream["datastreams"]["10"]["current_value"]);
   $(t3).html(datastream["datastreams"]["11"]["current_value"]);
   $(t4).html(datastream["datastreams"]["12"]["current_value"]);
   $(t5).html(datastream["datastreams"]["13"]["current_value"]);
   $(t6).html(datastream["datastreams"]["14"]["current_value"]);
   $(t7).html(datastream["datastreams"]["15"]["current_value"]);
   $(wu_uv).html(datastream["datastreams"]["16"]["current_value"]);
   $(wu_weath).html(datastream["datastreams"]["17"]["current_value"]);
   
   xively.feed.subscribe( feedID, function ( event , datastream_updated ) {  
     $(wu_hum).html(datastream["datastreams"]["0"]["current_value"]);
     $(wu_temp).html(datastream["datastreams"]["1"]["current_value"]);
     $(h1).html(datastream["datastreams"]["2"]["current_value"]);
     $(h2).html(datastream["datastreams"]["3"]["current_value"]);
     $(h3).html(datastream["datastreams"]["4"]["current_value"]);
     $(h4).html(datastream["datastreams"]["5"]["current_value"]);
     $(h5).html(datastream["datastreams"]["6"]["current_value"]);
     $(h6).html(datastream["datastreams"]["7"]["current_value"]);
     $(h7).html(datastream["datastreams"]["8"]["current_value"]);
     $(t1).html(datastream["datastreams"]["9"]["current_value"]);
     $(t2).html(datastream["datastreams"]["10"]["current_value"]);
     $(t3).html(datastream["datastreams"]["11"]["current_value"]);
     $(t4).html(datastream["datastreams"]["12"]["current_value"]);
     $(t5).html(datastream["datastreams"]["13"]["current_value"]);
     $(t6).html(datastream["datastreams"]["14"]["current_value"]);
     $(t7).html(datastream["datastreams"]["15"]["current_value"]);
     $(wu_uv).html(datastream["datastreams"]["16"]["current_value"]);
     $(wu_weath).html(datastream["datastreams"]["17"]["current_value"]);
    }); 
  });
});