void main() {
  var vvar = 1;
  String string = "asdf"; // 명시적으로 설정한 타입(String)으로만 업데이트 가능
  String? stringnull = "dddd"; // 명시적으로 설정한 타입(String) 외에 Null 타입으로도 업데이트 가능
  dynamic dyna = 123; // 처음 할당한 변수값과 다른 타입으로도 업데이트 가능
  final name = "name"; // 한번 할당한 변수값을 바꿀 수 없음
  late final String
      latefinalstring; // 처음 변수명을 선언할 때 변수값을 할당하지 않아도 되며, 나중에 명시적으로 설정한 타입(String)으로 변수값을 설정할 수 있음. 한번 할당한 변수값을 바꿀 수 없음
  const a =
      123123; // 컴파일하기 전(앱을 실행하기 전)에 미리 변수값을 정해줘야 함(compile-time constant). 한번 할당한 변수값을 바꿀수 없음

  String name1 = "문자,,";
  bool alive = true; //or false boolen
  int age = 30; // extends num
  double money = 100000.01;
  // num = 12; // maybe int, maybe double
  // num = 1.2;

  List<int> numbersClass = [
    1,
    2,
    3,
    4,
  ]; // list[int]

  // collection if

  var giveMeFive = true;
  var numbers = [
    1,
    2,
    3,
    4,
    if (giveMeFive) 5,
    // if (giveMeFive){
    //   numbers.add(5);
    // }
  ];
  print(numbers);

  numbers.add(5);
  numbers.first;
  numbersClass.last; // 등등등~~~
  // 정렬 = option + shift + f

  //string interpolation 변수 추가?
  var myName = "won";
  var greetion = "hello everyone, my name in $myName, nive to meet you";
  print(greetion); // ㅇㅋㅇㅋ 아주편하다

  var myAge = 10;
  var greetin2 =
      'hello everyone, my name in $myName, nive to meet you and i\'m ${myAge + 2} ';
  print(greetin2);

  //collection for
  var oldFriends = [
    'aa',
    'bb',
  ];
  var newFriends = [
    'cc',
    'dd',
    'ee',
    for (var friend in oldFriends) "😘 $friend",
  ];
  print(newFriends);

  var player = { // value = object (typescript = any) define i wast
    'name' : 'one',
    'xp' : 10.99,
    'superpower' : false,
};


  Map<int, bool> player2 = { // key, value type
    1 : true,
    2 : false,
    3 : true,
  };

  Map<List<int>, bool> player3 = {
    [1, 2, 3, 4, 5, ] : true,
  };

  // Correction.
  // Dart Set -> JS Set , python tuple
  // Dart List -> JS Array , python List

  // var num1 = {1, 2, 3, 4, 5}; 
  Set<int> numbers1 = {1, 2, 3, 4, 5}; //unique!!!!! ㅇㅋㅇㅋ 튜플
  // List<int> numbers1 = [1, 2, 3, 4, 5, ];
  numbers1.add(1);
  numbers1.add(1);
  numbers1.add(1);
  numbers1.add(1); //not working
  print(numbers1);

  List<bool> x = [true];
  var y = false;



}
