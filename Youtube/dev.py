import requests
import json
import api

URL = 'https://www.googleapis.com/youtube/v3/'
API_KEY = api.key
video_id = 'Yb-rLsCpBvI'

def get_video_comment(video_id, n=1, next_page_token=None):
    params = {
        'key': API_KEY,
        'part': 'snippet',
        'videoId': video_id,
        'order': 'relevance',
        'textFormat': 'plaintext',
        'maxResults': n,
        'pageToken': next_page_token,
    }
    response = requests.get(URL + 'commentThreads', params=params)
    return response.json()


pageToken = None

count = 0
while True:
    resource = get_video_comment(video_id, n=100, next_page_token=pageToken)
    comments = resource["items"]
    for comment in comments:
        text = comment['snippet']['topLevelComment']['snippet']['textDisplay']
        reply_cnt = comment['snippet']['totalReplyCount']
        print(text)
        count += 1
        count += reply_cnt
    if "nextPageToken" in resource:
        pageToken = resource["nextPageToken"]
    else:
        break

print("総コメント数：{}".format(count))