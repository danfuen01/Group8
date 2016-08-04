#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
from google.appengine.api import users
import webapp2
from PokeScore import UserScore

class MainPage(webapp2.RequestHandler):
    def get(self):
        user = users.get_current_user()
        if user:
            greeting = ('Welcome, %s! (<a href="%s">sign out</a>)' %
                (user.nickname(), users.create_logout_url('/')))
            print "Location:https://www.google.com/\r\n"
        else:
            greeting = ('<a href="%s">Create a Username</a>.' %
            users.create_login_url('/static/Pokemon.html'))

        self.response.out.write('<html><body>%s</body></html>' % greeting)

class HighScoreHandler(webapp2.RequestHandler):
    def get(self):
        user_score_query= UserScore.query().order(-UserScore.points)
        user_scores=user_score_query.fetch(limit = 10)
        self.response.out.write(user_scores)




app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/HighScore', HighScoreHandler)  
], debug=True)
