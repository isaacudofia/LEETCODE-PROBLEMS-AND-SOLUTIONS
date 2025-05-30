class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

const node = new Node("A");

console.log(node); //Output: Node { data: 'A', next: null }

// Function to traverse and print the singly linked list
function traverseList(head) {
  // Base condition is when the head is nullptr
  if (head === null) {
    console.log();
    return;
  }

  // Printing the current node data
  console.log(head.data + " ");

  // Moving to the next node
  traverseList(head.next);
}

// Driver code

// Create a hard-coded linked list:
// 10 -> 20 -> 30 -> 40
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

// Example of traversing the node and printing
traverseList(head);
