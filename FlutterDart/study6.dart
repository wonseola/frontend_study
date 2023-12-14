mixin Strong {
  final double strength = 1500.99;
}

mixin quick {
  void runquick() {
    print("run~!~!~!~!");
  }
}

mixin tall {
  final double height = 1.99;
}

enum Team { blue, red }

class Player with Strong, quick, tall {
  final Team team;
  Player({
    required this.team,
  });
}

class horse with Strong, quick{}

class kid with Strong, quick{}

void main() {
  
}
