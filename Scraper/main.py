import requests
import json

def main():
    api_key = 'V33icYcnIfX0FIp0ZnOa7cZn42XzTG9a'

    url = f'https://api.nytimes.com/svc/archive/v1/1896/7s.json?&api-key={api_key}'
    r = requests.get(url)

    json_data = r.json()

    json_formatted_str = json.dumps(json_data, indent=4)

    with open('test.json', 'w') as f:
        f.write(json_formatted_str)


if __name__ == '__main__':
    main()
