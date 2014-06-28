import xively
import datetime

XIVELY_API_KEY = 'IPMdQlqEtGmcy5WxkrzD4KL6jTNqq1mSeVNkebgdOMntYsh3'
XIVELY_FEED_ID = 1579988059
api = xively.XivelyAPIClient(XIVELY_API_KEY)
feed = api.feeds.get(XIVELY_FEED_ID)
now = datetime.datetime.now()
broken = "broken"

feed.datastreams = [
  xively.Datastream(id="temp1", current_value=broken, at=now),
  xively.Datastream(id="humidity1", current_value=broken, at=now),
  xively.Datastream(id="temp2", current_value=broken, at=now),
  xively.Datastream(id="humidity2", current_value=broken, at=now),
  xively.Datastream(id="temp3", current_value=broken, at=now),
  xively.Datastream(id="humidity3", current_value=broken, at=now),
  xively.Datastream(id="temp4", current_value=broken, at=now),
  xively.Datastream(id="humidity4", current_value=broken, at=now),
  xively.Datastream(id="temp5", current_value=broken, at=now),
  xively.Datastream(id="humidity5", current_value=broken, at=now),
  xively.Datastream(id="temp6", current_value=broken, at=now),
  xively.Datastream(id="humidity6", current_value=broken, at=now),
  xively.Datastream(id="temp7", current_value=broken, at=now),
  xively.Datastream(id="humidity7", current_value=broken, at=now),

]

feed.update()