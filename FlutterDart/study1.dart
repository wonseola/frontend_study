String sayhello(
  String name,
  int age,
  [String? country = 'cuba'] 
) => "Hello $name , you are $age and you from $country";

String Capitalize(String? name) 
{
  if (name != null){
    return name.toUpperCase();
  }
  return 'null';
}

String Capitalize2 (String? name) 
// => name != null ? name.toUpperCase() : 'null';
=> name?.toUpperCase() ?? 'null';

typedef ListOfInts = List<int>;

ListOfInts reverseList(List<int> list){
  var reversed = list.reversed;
  return reversed.toList();
}


// typedef UserInfo = Map<String, String>;
String sayHi(Map<String, String> userInfo){
  return "Hi ${userInfo['name']}" ;
}



void main() {

  var result = sayhello(
    'tomato',
    12,
  );
  print(result);

  var c1 = Capitalize('asdfakdlfjalkdjf');
  var c11 = Capitalize(null);
  print(c1);

  var c2 = Capitalize2("222liqoirlajdf");
  var c22 = Capitalize2(null);
  print(c22);


  String? name;
  name ??= 'aaaa';
  print(name);

  var re = reverseList([1, 2, 3,]);
  print(re);

}
