// Set Xively API Key
$(document).ready(function($) {
  console.log("ready")
  xively.setKey( "IPMdQlqEtGmcy5WxkrzD4KL6jTNqq1mSeVNkebgdOMntYsh3" );  
  console.log("Key Found, JQuery ready")

  var feedID = 1579988059,
      wu_humidity = "exterior_humidity";
      wu_hum = "#hum";

      wu_temperature = "exterior_temp";
      wu_temp = "#temp";

      wu_weather = "weather";
      wu_weath = "#weather";

      wu_ultrav = "uv";
      wu_uv = "#uv"

      t1cha = "temp1"
      h1cha = "humidity1"
      t1 = "#t1"
      h1 = "#h1"

      t2cha = "temp2"
      h2cha = "humidity2"
      t2 = "#t2"
      h2 = "#h2"

      t3cha = "temp3"
      h3cha = "humidity3"
      t3 = "#t3"
      h3 = "#h3"

      t4cha = "temp4"
      h4cha = "humidity4"
      t4 = "#t4"
      h4 = "#h4"

      t5cha = "temp5"
      h5cha = "humidity5"
      t5 = "#t5"
      h5 = "#h5"

      t6cha = "temp6"
      h6cha = "humidity6"
      t6 = "#t6"
      h6 = "#h6"

      t7cha = "temp7"
      h7cha = "humidity7"
      t7 = "#t7"
      h7 = "#h7"



  xively.datastream.get (feedID, wu_humidity, function ( datastream ) {
    $(wu_hum).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, wu_humidity, function ( event , datastream_updated ) {  
      $(wu_hum).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, wu_temperature, function ( datastream ) {
    $(wu_temp).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, wu_temperature, function ( event , datastream_updated ) {  
      $(wu_temp).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, wu_weather, function ( datastream ) {
    $(wu_weath).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, wu_weather, function ( event , datastream_updated ) {  
      $(wu_weath).html( datastream_updated["current_value"] );

    }); 
  });

  xively.datastream.get (feedID, wu_ultrav, function ( datastream ) {
    $(wu_uv).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, wu_ultrav, function ( event , datastream_updated ) {  
      $(wu_uv).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, t1cha, function ( datastream ) {
    $(t1).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, t1cha, function ( event , datastream_updated ) {  
      $(t1).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, h1cha, function ( datastream ) {
    $(h1).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, h1cha, function ( event , datastream_updated ) {  
      $(h1).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, t2cha, function ( datastream ) {
    $(t2).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, t2cha, function ( event , datastream_updated ) {  
      $(t2).html( datastream_updated["current_value"] );

    }); 
  });

  xively.datastream.get (feedID, h2cha, function ( datastream ) {
    $(h2).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, h2cha, function ( event , datastream_updated ) {  
      $(h2).html( datastream_updated["current_value"] );

    }); 

  });

    xively.datastream.get (feedID, t3cha, function ( datastream ) {
    $(t3).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, t3cha, function ( event , datastream_updated ) {  
      $(t3).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, h3cha, function ( datastream ) {
    $(h3).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, h3cha, function ( event , datastream_updated ) {  
      $(h3).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, t4cha, function ( datastream ) {
    $(t4).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, t4cha, function ( event , datastream_updated ) {  
      $(t4).html( datastream_updated["current_value"] );

    }); 
  });

  xively.datastream.get (feedID, h4cha, function ( datastream ) {
    $(h4).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, h4cha, function ( event , datastream_updated ) {  
      $(h4).html( datastream_updated["current_value"] );

    }); 

  });

     xively.datastream.get (feedID, t5cha, function ( datastream ) {
    $(t5).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, t5cha, function ( event , datastream_updated ) {  
      $(t5).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, h5cha, function ( datastream ) {
    $(h5).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, h5cha, function ( event , datastream_updated ) {  
      $(h5).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, t6cha, function ( datastream ) {
    $(t6).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, t6cha, function ( event , datastream_updated ) {  
      $(t6).html( datastream_updated["current_value"] );

    }); 
  });

  xively.datastream.get (feedID, h6cha, function ( datastream ) {
    $(h6).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, h6cha, function ( event , datastream_updated ) {  
      $(h6).html( datastream_updated["current_value"] );

    }); 

  });

  xively.datastream.get (feedID, t7cha, function ( datastream ) {
    $(t7).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, t7cha, function ( event , datastream_updated ) {  
      $(t7).html( datastream_updated["current_value"] );

    }); 
  });

  xively.datastream.get (feedID, h7cha, function ( datastream ) {
    $(h7).html( datastream["current_value"] );

    xively.datastream.subscribe( feedID, h7cha, function ( event , datastream_updated ) {  
      $(h7).html( datastream_updated["current_value"] );

    }); 

  });
});
