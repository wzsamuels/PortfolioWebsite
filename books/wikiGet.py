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

    print('Best page found: https://en.wikipedia.org/w/index.php?curid=' + str(pageid))
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
    max_count = 0
    max_count_index = -1
    regex = "([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp|svg))$)"
    p = re.compile(regex, re.IGNORECASE)
    for index, image in enumerate(image_array):
        count = 0
        for title_word in title_words:
            if re.search(title_word, image, re.IGNORECASE):
                count += 1
        if count > max_count and re.search(p, image):
            max_count = count
            max_count_index = index

    if max_count_index > -1:
        best_image = image_array[max_count_index]
        print(f"Best image found: {best_image}")
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

    return image_url
