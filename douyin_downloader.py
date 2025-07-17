import requests
import os
from tqdm import tqdm

def get_video_urls(user_sec_id):
    max_cursor = 0
    video_urls = []

    while True:
        api_url = f"https://www.iesdouyin.com/web/api/v2/aweme/post/?sec_uid={user_sec_id}&count=21&max_cursor={max_cursor}&aid=1128"
        headers = {
            "User-Agent": "Mozilla/5.0"
        }

        res = requests.get(api_url, headers=headers).json()
        aweme_list = res.get("aweme_list", [])
        if not aweme_list:
            break

        for aweme in aweme_list:
            url = aweme['video']['play_addr']['url_list'][0]
            video_urls.append(url)

        if res['has_more'] == 0:
            break
        max_cursor = res['max_cursor']

    return video_urls

def download_video(url, save_dir="downloads"):
    os.makedirs(save_dir, exist_ok=True)
    video_name = url.split("/")[-1].split("?")[0]
    save_path = os.path.join(save_dir, f"{video_name}.mp4")
    res = requests.get(url, stream=True)
    with open(save_path, "wb") as f:
        for chunk in tqdm(res.iter_content(chunk_size=1024), desc=video_name):
            if chunk:
                f.write(chunk)

if __name__ == "__main__":
    print("Masukkan sec_uid Douyin (misal: MS4wLjABAAAAxxxxxx):")
    user_sec_id = input("sec_uid: ")

    print("Mengambil semua video...")
    urls = get_video_urls(user_sec_id)
    print(f"Menemukan {len(urls)} video. Mulai mengunduh...")

    for url in urls:
        download_video(url)
