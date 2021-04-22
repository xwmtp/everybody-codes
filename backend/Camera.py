from dataclasses import dataclass
import csv
import re

@dataclass
class Camera:
    id: str
    number: int
    name: str
    latitude: float
    longitude: float

    def __str__(self):
        return ' | '.join([str(self.number), f"{self.id} {self.name}", self.longitude, self.latitude])


def read_camera_data():
    with open('data/cameras-defb.csv', 'r') as file:
        csv_reader = csv.reader(file, delimiter=';')
        cameras = []
        next(csv_reader)
        for row in csv_reader:
            try:
                camera = create_camera(row)
                if camera:
                    cameras.append(camera)
            except IndexError:
                print(f"Could not parse row: {row}")
                pass
    return cameras

def create_camera(data):
    parsed_name = parse_camera_name(data[0])
    if parsed_name:
        id, number, name = parsed_name
        return Camera(
            id=id,
            number=number,
            name=name,
            latitude=data[1],
            longitude=data[2]
        )

def parse_camera_name(name):
    match = re.match(r'(\w+-\w+-(\d+))\W', name)
    if not match:
        return
    camera_id = match.groups()[0]
    camera_number = int(match.groups()[1])
    camera_name = name.replace(match.group(), '')

    if camera_number == 545 and 'Stationsstraat' in camera_name:  #quick fix, todo
        camera_number = 546

    return camera_id, camera_number, camera_name
