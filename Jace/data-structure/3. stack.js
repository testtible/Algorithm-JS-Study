class Stack {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	// 노드를 추가하는 메소드
	push(element) {
		const node = new Node(element)

		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head = node
		}

		++this.size

		return this
	}

	pop() {
		if (!this.tail) {
			return
		}

		const first = this.head

		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = first.next
			first.next = null
		}

		--this.size

		return first
	}

	// 스택에 해당 값의 엘리먼트가 있는지 확인하는 메소드
	include(element) {
		if (!this.head) {
			return false
		}

		let current = this.head

		while (current) {
			if (current.element === element) {
				return true
			}

			current = current.next
		}

		return false
	}

	// 스택 안의 노드들을 전부 출력하는 메소드
	print() {
		let current = this.head
		let str = ''

		while (current) {
			str = `${current.element}` + str

			current = current.next
		}

		return str
	}
}

class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

module.exports = Stack
