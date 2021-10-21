// 단일 링크드리스트 : head에서 tail로 이어지는 한 방향 흐름 포인터 ( tail 노드는 next로 null을 가리킴 )
// 이중 링크드리스트 : 하지만 Tail 부분에 원소의 삽입과 삭제를 수행하려면 링크드 리스트 원소의 갯수 n만큼 탐색을 수행한 다음에야 삽입과 삭제를 수행할 수 있습니다.
//                 이를 해결하기 위해 등장한 개념이 '이중 링크드 리스트 Doubly linked list'입니다. 
class linkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    // this.tail = null;
  }
  
  node(data) {
    this.data = data;
    this.next = null;
  }
  
  add(data) {
    let current = this.head;
    let node = this.node(data);
    if(!this.head) {
      this.head = node;
      this.length++;
      return data;
    }else {
      current.next = data; 
      this.length++;
      return data;
    }


  }

  
//   method() {
//     return;
//   }


}


// 배열을 직접 만들어본다는 생각.