class Queue {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	// 큐에 노드를 추가하는 메소드
	enqueue(element) {
		const node = new Node(element)

		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			this.head.next = node
			this.head = node
		}

		++this.size

		return this
	}

	// 큐에서 노드를 내보내는 메소드
	dequeue() {
		if (!this.tail) {
			return
		}

		const last = this.tail

		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = last.next
			last.next = null
		}

		--this.size

		return last
	}

	// 큐 안의 노드들을 전부 출력하는 메소드
	print() {
		let current = this.tail
		let str = ''

		while (current) {
			str += `${current.element} - `

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
