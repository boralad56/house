# These modules are for system operations 
# like returning size of variables (size optimizations) or
# reading from the serial port 
import os
import sys 
import serial 
import time
import datetime
# Modules hit WUNDERGROUND API
# and introduce real-time weather data 
import urllib2
import json
# Log data to cloud with Xively 
import xively

global xively_success
global csv_success 
xively_success = False
csv_success = False



def getWunderground():
  dataFromWunderground = []
  try:
    #f = urllib2.urlopen('http://api.wunderground.com/api/a1ab3a70a8e9f35e/geolookup/conditions/q/ME/Orrington.json')
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
    dataFromWunderground = [str(weather), str(uv), str(temp_f), str(relative_humidity[:-1]) ]
  except:
    for i in range(0,4):
      dataFromWunderground.append("No connection")
  return dataFromWunderground

def getDateTime():
  timeNow = time.strftime("%H:%M:%S")
  dateToday = time.strftime("%d/%m/%y")
  return [dateToday, timeNow]

def status(a, b):
  if a and b:
        return "Xively and CSV updated"
  elif a:
    return "Xively updated but CSV not updated"
  elif b:
    return "CSV updated but Xively not updated"


def printXively(dataList):
  global xively_success

  XIVELY_API_KEY = 'IPMdQlqEtGmcy5WxkrzD4KL6jTNqq1mSeVNkebgdOMntYsh3'
  XIVELY_FEED_ID = 1579988059
  api = xively.XivelyAPIClient(XIVELY_API_KEY)
  feed = api.feeds.get(XIVELY_FEED_ID)
  now = datetime.datetime.now()
  feed.datastreams = [
    #xively.Datastream(id="uv", current_value=dataList[3], at=now),
    #xively.Datastream(id="weather", current_value=dataList[2], at=now),
    #xively.Datastream(id="exterior_temp", current_value=dataList[4], at=now),
    #xively.Datastream(id="exterior_humidity", current_value=dataList[5], at=now),
    #xively.Datastream(id="temp1", current_value=dataList[6][0], at=now),
    #xively.Datastream(id="humidity1", current_value=dataList[6][1], at=now),
    #xively.Datastream(id="temp2", current_value=dataList[7][0], at=now),
    #xively.Datastream(id="humidity2", current_value=dataList[7][1], at=now),
    xively.Datastream(id="temp3", current_value=dataList[8][0], at=now),
    xively.Datastream(id="humidity3", current_value=dataList[8][1], at=now),
    xively.Datastream(id="temp4", current_value=dataList[9][0], at=now),
    xively.Datastream(id="humidity4", current_value=dataList[9][1], at=now),
    xively.Datastream(id="temp5", current_value=dataList[10][0], at=now),
    xively.Datastream(id="humidity5", current_value=dataList[10][1], at=now),
    xively.Datastream(id="temp6", current_value=dataList[11][0], at=now),
    xively.Datastream(id="humidity6", current_value=dataList[11][1], at=now),
    xively.Datastream(id="temp7", current_value=dataList[12][0], at=now),
    xively.Datastream(id="humidity7", current_value=dataList[12][1], at=now),

  ]

  feed.update()
  xively_success = True
  


def writeToCsv(datalist):
  global csv_success

  header = ["date", "time", "weather", "uv", "exterior temp", "exterior humidity", "temp1", "hum2", "temp2", "hum2", "temp3", "hum3", "temp4", "hum4", "temp5", "hum5", "temp6", "hum6", "temp7", "hum7","\n"]

  fileName = str(time.strftime("%m_%d_%y_")+ "log.csv")
  if os.path.exists(fileName):
    f = open(fileName, "a")
  else:
    f = open(fileName, "a+")
    for element in header:
      f.write(element + ",")
    f.write("\n")

  for element in datalist:
    if type(element)==str:
      f.write(element + ",")
    if type(element) == list:
      for i in element:
        f.write(i + ",")
  f.write("\n")
  f.close()
  csv_success = True

def mainLoop():
  global xively_success
  global csv_success
  data = []
  ser = serial.Serial("/dev/tty.usbmodem1421", 9600)
  for i in range(0,2):
        ser.readline()
  print "Serial Initialized"

  while 1:
    if ser.inWaiting():
      datetimeData = getDateTime()
      weatherData = getWunderground()

      for i in datetimeData:
        data.append(i)
      for i in weatherData:
        data.append(i)
      val = ser.readline().strip('\n\r').split(';')
      
      for i in range(0, len(val)):
        sensorData = val[i].split(':')
        data.append(sensorData)

      try: 
        writeToCsv(data)
        csv_success = True
      except:
        csv_success = False

      try:
        printXively(data)
        xively_success = True
      except:
        try:
          printXively(data)
          xively_success = True
        except:
          xively_success = False

      print status(xively_success, csv_success), ": ", data 
      data = []

mainLoop()