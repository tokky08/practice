import numpy as np
import time

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
    

input_list = [0, 1, 2, 3, 4]
input_list = [1, 1, 2, 2, 3, 5, 6, 4, 4, 5]
input_list = [1, 3, 5, 6]
input_list = [73, 93, 21, -6, 1]
input_list = [3, 5, 6]

test1 = list(np.random.randint(-100,20000,1000000))

start = time.time()
# print(answer1(test1))
print(answer2(test1))
elapsed_time = time.time() - start
# print ("1 elapsed_time:{0}".format(elapsed_time) + "[sec]")
print ("2 elapsed_time:{0}".format(elapsed_time) + "[sec]")

