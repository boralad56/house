import urllib2
import json


## What do we want to get from WUNDERGROUND? 
## Relative Humidity
## Temp_f
## Weather 
## 



f = urllib2.urlopen('http://api.wunderground.com/api/a1ab3a70a8e9f35e/geolookup/conditions/q/ME/Orrington.json')
json_string = f.read()
parsed_json = json.loads(json_string)
weather = parsed_json["current_observation"]["weather"]
temp_f = parsed_json["current_observation"]["temp_f"]
relative_humidity = parsed_json["current_observation"]["relative_humidity"]
uv = parsed_json["current_observation"]["UV"]
#pressure_in = parsed_json["current_observation"]["pressure_in"]
#wind_degrees = parsed_json["current_observation"]["wind_degrees"]
#wind_mph = parsed_json["current_observation"]["wind_mph"]
f.close()
print weather
data = [str(weather), float(relative_humidity[:-1]), float(temp_f), float(uv)]


print data