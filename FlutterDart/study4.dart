


abstract class Human{
  void walk();
}


enum Team {red, blue}
enum XPLevel{beginner, medium, pro}


class Player extends Human{
  final String name;
  XPLevel xp;
  Team team;

  // Player.fromJson(Map<String, dynamic> playerJson)
  //     : name = playerJson['name'],
  //       xp = playerJson['xp'],
  //       team = playerJson['team'];

  Player({
    required this.name,
    required this.xp,
    required this.team,
  });

  void walk(){
    print('im walk');
  }

  void sayHello() {
    print("name : $name");
  }
}

class Coach extends Human{
  void walk(){
    print('coach walk');
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

  var bom = Player(name: 'bom', xp: XPLevel.beginner, team: Team.blue)
    ..xp = XPLevel.pro
    ..team = Team.red;

    // bom.xp = 10000;
    //bom.team = 'red';


}
