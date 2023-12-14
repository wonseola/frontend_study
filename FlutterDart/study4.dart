class Player {
  final String name;
  int xp;
  String team;

  // Player.fromJson(Map<String, dynamic> playerJson)
  //     : name = playerJson['name'],
  //       xp = playerJson['xp'],
  //       team = playerJson['team'];

  Player({
    required this.name,
    required this.xp,
    required this.team,
  });

  void sayHello() {
    print("name : $name");
  }
}

void main() {
  // var apiData = [
  //   {
  //     "name": "bom",
  //     "team": "red",
  //     "xp": 0,
  //   },
  //   {
  //     "name": "lynn",
  //     "team": "red",
  //     "xp": 0,
  //   },
  //   {
  //     "name": "james",
  //     "team": "red",
  //     "xp": 0,
  //   },
  // ];

  // apiData.forEach((playerJson) {
  //   var player = Player.fromJson(playerJson);
  //   player.sayHello();
  //  });

  var bom = Player(name: 'bom', xp: 1000, team: 'blue')
    ..xp = 100000000
    ..team = 'red';

    // bom.xp = 10000;
    //bom.team = 'red';

    
}
