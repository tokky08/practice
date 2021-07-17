import requests
import json
import xml.etree.ElementTree as etree


url = "https://map.yahooapis.jp/search/local/V1/localSearch"
appid = "&appid=" + client_id
area_range = "&lat=35.665662327484&lon=139.73091159273&dist=3"
gc = "&gc=01"

def get_lat_lon(query):
    geo_coder_url = "https://map.yahooapis.jp/geocode/cont/V1/contentsGeoCoder"
    params = {
        "appid": client_id,
        # "appid": os.environ['YAHOO_LOCAL_SEARCH_API_CLIENT_ID'],
        "output": "json",
        "query": query,
        # "category": "landmark"
    }
    try:
        response = requests.get(geo_coder_url, params=params)
        response = response.json()
        print(json.dumps(response, indent=2, ensure_ascii=False))
        geometry = response["Feature"][0]["Geometry"]
        coordinates = geometry["Coordinates"].split(",")
        lon = coordinates[0]
        lat = coordinates[1]
        # print(json.dumps(response, indent=2, ensure_ascii=False))
    except:
        # Yahoo本社の座標
        lat = 35.68001 
        lon = 139.73284
        print("except")
    return lat, lon

lat, lon = get_lat_lon("東京")
print(lat, lon)
# 新宿
# 139.71125089,35.69956728
# 東京
# 139.69181960,35.68955130

def get_place_name():
    geo_coder_url = "https://map.yahooapis.jp/placeinfo/V1/get"
    params = {
        "appid": client_id,
        # "appid": os.environ['YAHOO_LOCAL_SEARCH_API_CLIENT_ID'],
        "output": "json",
        "lat": 35.68001,
        "lon": 139.73284,
    }
    response = requests.get(geo_coder_url, params=params)
    response = response.json()


    return response

# lat, lon = get_lat_lon("Yahoo")



params = {
    "appid": client_id,
    # "appid": os.environ['YAHOO_LOCAL_SEARCH_API_CLIENT_ID'],
    "output": "json",
    "lat": 35.665662327484,
    "lon": 139.73091159273,
    # "dist": 3,
    "gc": "01",
    "minprice": 3000,
    "maxprice": 10000,
    "detail": "full",
    # "results": 100
}
# response = requests.get(url, params=params)
# response = response.json()
# response = response["Feature"]
# print(response)
# for item in response:
#     try:
#         # print(json.dumps(item, indent=2, ensure_ascii=False))
#         dinnerprice = item["Property"]["Detail"]["DinnerPrice"]
#         lunchprice = item["Property"]["Detail"]["LunchPrice"]
#         print("")
#         print("ディナー：{}".format(dinnerprice))
#         print("ランチ：{}".format(lunchprice))
#     except:
#         continue
# print(json.dumps(response, indent=2, ensure_ascii=False))

