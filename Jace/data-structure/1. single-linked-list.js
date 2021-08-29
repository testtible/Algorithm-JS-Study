class SingleLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	// 맨 뒤에 노드를 추가하는 메소드
	push(element) {
		const node = new Node(element)

		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}

		++this.size

		return this
	}

	// 맨 뒤의 노드를 제거하는 메소드
	pop() {
		if (!this.head) {
			return
		}

		let current
		let previous
		let last

		if (this.size === 1) {
			current = this.head
			this.head = null
			this.tail = null
		} else {
			previous = this.head
			current = previous.next

			while (current.next) {
				current = current.next
				previous = previous.next
			}

			last = current
			previous.next = null
			this.tail = previous
		}

		--this.size

		return last
	}

	// 맨 앞에 노드를 추가하는 메소드
	unshift(element) {
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

	// 맨 앞의 노드를 제거하는 메소드
	shift() {
		if (!this.head) {
			return
		}

		let current = this.head

		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = this.head.next
		}

		--this.size

		current.next = null

		return current
	}

	// 인덱스로 노드를 가져오는 메소드
	indexOf(index) {
		if (index < 0 || index > this.size) {
			return
		}

		let current = this.head

		for (let i = 0; i < index; ++i) {
			current = current.next
		}

		return current
	}

	// 해당 인덱스에 노드를 추가하는 메소드
	insertAt(index, element) {
		if (index < 0 || index > this.size) {
			return
		}

		if (index === 0) {
			return this.unshift(element)
		}

		if (index === this.size) {
			return this.push(element)
		}

		const node = new Node(element)
		const prev = this.indexOf(index - 1)
		const next = prev.next

		prev.next = node
		node.next = next

		++this.size

		return this
	}

	// 해당 인덱스의 노드를 제거하는 메소드
	removeAt(index) {
		if (index < 0 || index >= this.size) {
			return
		}

		if (index === 0) {
			return this.shift()
		}

		if (index === this.size - 1) {
			return this.pop()
		}

		const prev = this.indexOf(index - 1)
		const current = prev.next

		prev.next = current.next

		--this.size
		current.next = null

		return current
	}

	// 리스트에 해당 값의 엘리먼트가 있는지 확인하는 메소드
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

	// 리스트 안의 노드들을 전부 출력하는 메소드
	print() {
		let current = this.head
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
