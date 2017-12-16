#imports
import json, requests

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from parsel import Selector
from time import sleep

from azure.storage.blob import BlockBlobService
from azure.storage.blob import PublicAccess

#helpers
def get_cookies_dict(driver):
    cookies_list = driver.get_cookies()
    cookies_dict = {}
    for cookie in cookies_list:
        cookies_dict[cookie['name']] = cookie['value']
    return cookies_dict;

def get_Game(url, headers, code, date, time):
    response = requests.post(url, json={'Sifra': code}, headers=headers)
    responseJsons = response.json()

    game = { 
        "Date": date,
        "Time": time,
        "Home": responseJsons[0]["T"][0]["ParNaziv"].split(':')[0].strip(),
        "Away": responseJsons[0]["T"][0]["ParNaziv"].split(':')[1].strip(),
        "Tips": []
    }

    for responseJson in responseJsons:
        responseTips = responseJson["T"]
        for responseTip in responseTips:
            tip = {
                "Name": responseTip["IgraNaziv"],
                "Description": responseTip["TipOpisMK"],
                "Tip": responseTip["TipPecatiWeb"],
                "Odd": responseTip["Kvota"]
            }
            game["Tips"].append(tip)

    return game;

#SCRIPT START
#start Chrome driver and get URL
driver = webdriver.Chrome('chromedriver')
driver.get('http://sportlife.com.mk/Oblozuvanje')
sleep(5)

#select EN language
#languages_ddl = driver.find_element_by_xpath('//*[@id="ddlLanguages"]/option[text()="EN"]')
#languages_ddl.click()
#sleep(5)

#select the sport checkbox
sport_checkbox = driver.find_element_by_xpath('//*[@id="chkSportT0"]')
sport_checkbox.click()
sleep(5)

#select all main tables
page_selector = Selector(text=driver.page_source)
main_tables = page_selector.xpath('//table[@class="main-table"]').extract()

#get cookies dictionary
cookies_dict = get_cookies_dict(driver)

#set url and headers
url = 'http://sportlife.com.mk/Oblozuvanje.aspx/GetTipovi'
headers = {
    "Host": "sportlife.com.mk",
    "Origin": "http://sportlife.com.mk",
    "Referer": "http://sportlife.com.mk/Oblozuvanje",
    "Connection": "keep-alive",
    "Content-Length": "14",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
    "Content-Type": "application/json; charset=UTF-8",
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "en-US,en;q=0.9",
    "Cookie": "ASP.NET_SessionId=" + cookies_dict.get('ASP.NET_SessionId') + 
    "; __AntiXsrfToken=" + cookies_dict.get('__AntiXsrfToken') +
    "; _ga="+ cookies_dict.get('_ga') +
    "; _gid="+ cookies_dict.get('_gid') +
    "; style="+ cookies_dict.get('style')
}

#initialize odds
odds = { "Leagues": [] }

#iterate through each table
for main_table in main_tables:
    table_selector = Selector(text = main_table)

    #get the league
    league_name = table_selector.xpath('//thead/tr/th[@class="match-name"]/span/text()').extract_first()
    league = { "Name": league_name, "Games": [] }

    #get the game codes and iterate throu each
    rows = table_selector.xpath('//tbody/tr[@class="th-table"]').extract()
    for row in rows:
        row_selector = Selector(text = row)
        date = row_selector.xpath('//td[contains(@class,"open-table")]/span/text()').extract_first()
        time = row_selector.xpath('//td[contains(@class,"open-table")]/span/text()').extract()[1]
        code = row_selector.xpath('//td[contains(@class,"code")]/span/text()').extract_first()
        game = get_Game(url, headers, code, date, time)
        league["Games"].append(game)
        sleep(5)

    #append the league
    odds["Leagues"].append(league)

#write to json file
with open('odds.json', 'w') as odds_file:
    json.dump(odds, odds_file, indent = 4)

#upload to azure blob
block_blob_service = BlockBlobService(account_name='tipals', account_key='tZtOheZGoZ2QwGO1s/TUKIJKJ+HwiT3FYPDjSUWaKt1C2lnOx1rTkBl0c42AGjImOjLTGUWmooblhGLCORHvmw==')
block_blob_service.create_blob_from_path(
    'public',
    'odds.json',
    'odds.json')

print('Done..')
#SCRIPT END



