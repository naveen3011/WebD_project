from flask import Flask, render_template, request

import tweepy
import mpld3
from textblob import TextBlob
from wordcloud import WordCloud
import pandas as pd
import numpy as np
import re
import os
import matplotlib.pyplot as plt
plt.style.use('fivethirtyeight')

application = Flask(__name__)

@application.route('/')
def hello_world():
	return render_template('index.html')

@application.route('/result', methods=['POST', 'GET'])
def result():
	userID = request.form['username']
	
	authenticate = tweepy.OAuthHandler('7jy0TazImsgjy9wjRGb2fSaRu', 'tduhf6sADKU9ajSiawBewtNxnR2NJHkqVSq1TM8hOt7fvX7yGL')

	authenticate.set_access_token('1591889475860561920-6RabaKy2Y7BzKe1cXlDAsDZeGWkMbf', 'x8gSwP6x38EbJsw3XD6ptffeTULCaNtggPeJIn6TFfYgk')
	api = tweepy.API(authenticate, wait_on_rate_limit = True)
	posts = api.user_timeline(screen_name = userID, count = 100, lang = "en", tweet_mode = "extended")
	df = pd.DataFrame( [tweet.full_text for tweet in posts], columns=['Tweets'])
	def cleanTxt(text):
	    text = re.sub(r'@[A-Za-z0-9]+', '', text)
	    text = re.sub(r'#', '', text)
	    text = re.sub(r'RT[\s]+:', '', text)
	    text = re.sub(r'https?:\/\/\S+', '', text)
	    
	    return text

	df['Tweets'] = df['Tweets'].apply(cleanTxt)
	def getSubjectivity(text):
	    return TextBlob(text).sentiment.subjectivity

	def getPolarity(text):
	    return TextBlob(text).sentiment.polarity

	df['Subjectivity'] = df['Tweets'].apply(getSubjectivity)
	df['Polarity'] = df['Tweets'].apply(getPolarity)
	allWords = ' '.join( [twts for twts in df['Tweets']] )
	wordCloud = WordCloud(width = 500, height = 300, random_state = 21, max_font_size = 119).generate(allWords)

	plt.imshow(wordCloud, interpolation= "bilinear")
	plt.axis('off')
	fig1 = plt.gcf()
	plt.show()
	html_str1 = mpld3.fig_to_html(fig1)
	def getAnalysis(score):
	    if score < 0:
	        return 'Negative'
	    elif score == 0:
	        return 'Neutral'
	    else:
	        return 'Positive'

	df['Analysis'] = df['Polarity'].apply(getAnalysis)
	plt.figure(figsize=(8,6))
	for i in range(0, df.shape[0]):
	    plt.scatter(df['Polarity'][i], df['Subjectivity'][i], color='Blue')

	plt.xlabel('Polarity')
	plt.ylabel('Subjectivity')
	fig2 = plt.gcf()
	plt.show()
	html_str2 = mpld3.fig_to_html(fig2)
	ptweets = df[df.Analysis == 'Positive']
	ptweets = ptweets['Tweets']
	pper = round((ptweets.shape[0]/df.shape[0])*100, 1)
	neutweets = df[df.Analysis == 'Neutral']
	neutweets = neutweets['Tweets']
	neper = round((neutweets.shape[0]/df.shape[0])*100, 1)
	ntweets = df[df.Analysis == 'Negative']
	ntweets = ntweets['Tweets']
	nper = round((ntweets.shape[0]/df.shape[0])*100, 1)
	proflink = "https://www.twitter.com/" + str(userID)
	return render_template('result.html', pper=pper, neper=nper, nper=nper, html_str1=html_str1, html_str2=html_str2, userID=userID, proflink=proflink)

@application.errorhandler(500)
def id_not_found(e):
    name = request.form['username']
    ename = str(name)
    return render_template('index.html', error="The given Twitter ID: {} is not valid".format(ename)), 500

@application.errorhandler(400)
def err1found(e):
    return render_template('index.html', error="ERROR: Please Try Again "), 400

@application.errorhandler(404)
def err2found(e):
    return render_template('index.html', error="ERROR: Please Try Again "), 404

@application.errorhandler(403)
def err3found(e):
    return render_template('index.html', error="ERROR: Please Try Again "), 403


if __name__ == '__main__':
	application.run(debug=True)
