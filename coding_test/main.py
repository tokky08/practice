text = "dwango"
text_list = text.split("")

result_list = []
length = text_list.length()
for i in range(length):
    result_list.append(text_list[abs(i-length+1)])

result = result_list.join("")

print(result)