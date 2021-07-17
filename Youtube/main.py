import requests
import json
import api

URL = 'https://www.googleapis.com/youtube/v3/'
API_KEY = api.key

def print_video_comment(video_id, n):
    params = {
        'key': API_KEY,
        'part': 'snippet,replies',
        'videoId': video_id,
        'order': 'relevance',
        'textFormat': 'plaintext',
        'maxResults': n,
    }
    response = requests.get(URL + 'commentThreads', params=params)
    resource = response.json()

    # data = json.loads(resource)
    # print(json.dumps(resource, indent=2))

    for comment_info in resource['items']:
        # コメント
        text = comment_info['snippet']['topLevelComment']['snippet']['textDisplay']
        # グッド数
        like_cnt = comment_info['snippet']['topLevelComment']['snippet']['likeCount']
        # 返信数
        reply_cnt = comment_info['snippet']['totalReplyCount']
        print('{}\nグッド数: {} 返信数: {}\n'.format(text, like_cnt, reply_cnt))
        if reply_cnt > 0:
            reply_comments = comment_info['replies']['comments']
            for reply in reply_comments:
                reply_comment = reply['snippet']['textDisplay']
                print("返信：{}\n".format(reply_comment))


        # print('{}\nグッド数: {} 返信数: {}\n'.format(text, like_cnt, reply_cnt))

video_id = 'yb1WdWNkpUk'
n = 100000
print_video_comment(video_id, n)