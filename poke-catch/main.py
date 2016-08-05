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
    

import webapp2
import jinja2
from PokeScore import UserScore

env = jinja2.Environment(loader=jinja2.FileSystemLoader("template"))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        user_template = env.get_template('username.html')
        self.response.out.write(user_template.render())

    def post(self):
        template=env.get_template("Pokemon.html")
        highscoreQuery = UserScore.query().filter(UserScore.username== self.request.get("user")).order(-UserScore.points)
        highscore_fetch =highscoreQuery.fetch(limit=1)
        if not highscore_fetch:
            highscore = 0
        else:
            highscore = highscore_fetch[0].points
        
        template_data = {
            'user': self.request.get("user"),
            'highscore': highscore
        }
        self.response.write(template.render(template_data))
 

class HighScoreHandler(webapp2.RequestHandler):
    def get(self):
        User_name= self.request.get("user")
        User_Score=self.request.get("score")
        S = UserScore(points=int(User_Score), username= User_name)
        S.put()
        self.redirect("/")






app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/savescore', HighScoreHandler)  
], debug=True)
