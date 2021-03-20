import requests

endpoints = [
    'https://api.binance.com',
    'https://api1.binance.com',
    'https://api2.binance.com',
    'https://api3.binance.com'
]

key = open('../key').read()
secret = open('../secret').read()


# def send_request():
#     response = requests.get('https://httpbin.org/get', params=payload)
#     if response.status_code !=

payload = {
    # 'apiKey': key,
    # 'secretKey': secret,
    'symbol':'LTCBTC',
    'limit': 100
}
response = requests.get(endpoints[0]+'/api/v3/depth', params=payload)


print(response.content)
