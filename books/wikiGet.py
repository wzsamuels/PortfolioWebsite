import re
import requests


def wiki_get(title):
    session = requests.Session()

    # Get search results for the title
    api = "https://en.wikipedia.org/w/api.php?"
    params = {
        'origin': "*",
        'action': "query",
        'list': "search",
        'srsearch': title,
        'format': "json",
    }
    request = session.get(url=api, params=params)
    data = request.json()
    if data['query']['searchinfo']['totalhits'] == 0:
        return '#'
    # Assume the best search result is the first let
    pageid = data['query']['search'][0]['pageid']
    # But try to find a better result for by checking for "(novel)"
    for result in data['query']['search']:
        if '(novel)' in result['title']:
            pageid = result['pageid']

    print('https://en.wikipedia.org/w/index.php?curid=' + str(pageid))
    # Find all the images on the page
    params = {
        'origin': "*",
        'action': "parse",
        'pageid': pageid,
        'redirect': "true",
        'format': "json",
    }
    request = session.get(url=api, params=params)
    data = request.json()
    # An array of all image files on the page
    image_array = data['parse']["images"]
    best_image = image_array[0]
    title_words = title.split()
    maxCount = 0
    maxCountIndex = -1
    regex = r'\.(png | svg | jpg | jpeg | gif)$'
    regex = "([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp|svg))$)"
    p = re.compile(regex, re.IGNORECASE)
    for index, image in enumerate(image_array):
        print(f"{index}: {image}")
        count = 0
        for title_word in title_words:
            if re.search(title_word, image, re.IGNORECASE):
                print(f"match found: {title_word} in {image}")
                count += 1
        if count > maxCount and re.search(p, image):
            maxCount = count
            maxCountIndex = index

    print(f"{maxCount} {maxCountIndex}")
    if maxCountIndex > -1:
        best_image = image_array[maxCountIndex]
        print(f"{best_image}")
    #
    # Get the URL of the image
    params = {
        'origin': "*",
        'action': 'query',
        'titles': "Image:" + best_image,
        'prop': "imageinfo",
        'iiprop': "url",
        'format': 'json'
    }
    request = session.get(url=api, params=params)
    data = request.json()
    image_url = list(data['query']['pages'].values())[0]['imageinfo'][0]['url']
    #print(list(image_url.values())[0]['imageinfo'][0]['url'])
    #image_url = [0]
    #print(image_url)
    return image_url

#wiki_get('Moby Dick')