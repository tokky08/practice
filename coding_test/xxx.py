# 鴇田和士

import numpy as np

def answer1(input_list):
    i = 1
    while True:
        if not i in input_list:
            return i
        i += 1

def answer2(input_list):
    # 0以下の値を削除
    input_list = np.array(input_list)
    input_list = input_list[input_list > 0]

    # 1から最大値までの配列を作成
    max_num = max(input_list)
    all_list = [i for i in range(1, max_num + 1)]

    # 2つの配列で重複のない新たな配列を作成
    diff_list = list(set(all_list) - set(input_list))
    if not diff_list:
        answer = max_num + 1
    else:
        answer = min(diff_list)
    return answer
    


