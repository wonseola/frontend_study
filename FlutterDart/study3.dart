class Player {
  final String name;
  int xp, age;
  String team;

  // Player(String name, int xp){
  //   this.name = name;
  //   this.xp = xp;
  // }

  Player(
      {required this.name,
      required this.xp,
      required this.team,
      required this.age}); // 굿;;

  Player.createBluePlayer({required String name, required int age})
      : this.age = age,
        this.name = name,
        this.team = 'blue',
        this.xp = 0;

  Player.createRedPlayer({required String name, required int age})
      : this.age = age,
        this.name = name,
        this.team = 'red',
        this.xp = 0;
  void sayHello() {
    print("Hi my name is $name"); //this.name
  }
}

void main() {
  // var player = Player();
  // print(player.name);
  // player.name = 'aaaa';
  // print(player.name);
  // player.sayHello();
  // var player2 = Player("lynn", 2500);
  // print(player2.name);

  // var player2 = Player(
  //   name: "lynn",
  //   xp: 2500,
  //   team: 'blue',
  //   age: 12,
  // );

  var playerB = Player.createBluePlayer(
    name: 'blue1',
    age: 30,
  );
  var playerR = Player.createRedPlayer(
    name: 'red1',
    age: 23,
  );
}
