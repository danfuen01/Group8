from google.appengine.ext import ndb

class UserScore(ndb.Model):
	points = ndb.IntegerProperty(required=True)
	username = ndb.StringProperty(required=False)
	






