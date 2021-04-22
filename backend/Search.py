from Camera import read_camera_data
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--name',
                    metavar='name',
                    type=str,
                    help='search term to find cameras by name')

if __name__ == '__main__':
    args = parser.parse_args()
    search_term = args.name

    cameras = read_camera_data()

    for camera in cameras:
        if search_term.lower() in camera.name.lower():
            print(camera)
