import serial 
import datetime 
import sys

ser = serial.Serial("/dev/tty.usbmodem1421", 9600)
#lastTime = datetime.datetime.now()




def 
while 1:
  # Check to see if anything is in serial bus.
  # If so, execute write sequence  
  if ser.inWaiting():
    val = ser.readline()
    print val


