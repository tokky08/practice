import requests
import json
import api

URL = 'https://www.googleapis.com/youtube/v3/'
API_KEY = api.key

def print_video_comment(video_id, n):
    params = {
        'key': API_KEY,
        'part': 'snippet',
        'videoId': video_id,
        'order': 'relevance',
        'textFormat': 'plaintext',
        'maxResults': n,
    }
    response = requests.get(URL + 'commentThreads', params=params)
    resource = response.json()

    # print(resource["items"])

    # print(type(resource["items"]))
    # print(len(resource["items"]))

    for comment_info in resource['items']:
        # コメント
        text = comment_info['snippet']['topLevelComment']['snippet']['textDisplay']
        # グッド数
        like_cnt = comment_info['snippet']['topLevelComment']['snippet']['likeCount']
        # 返信数
        reply_cnt = comment_info['snippet']['totalReplyCount']

        print('{}\nグッド数: {} 返信数: {}\n'.format(text, like_cnt, reply_cnt))

video_id = 'lxQsLOFHniw'
n = 100
print_video_comment(video_id, n)