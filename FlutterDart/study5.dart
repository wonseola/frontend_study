class Human {
  final String name;
  Human(this.name);
  void hi() {
    print("i'm $name");
  }
}

enum Team { blue, red }

class Player extends Human {
  final Team team;

  Player({
    required this.team,
    required String name,
  }) : super(name);

  @override
  void hi() {
    super.hi();
    print('my team is $team');
  }
}

void main() {
  var player = Player(team: Team.red, name: 'bom');
  player.hi();
}
