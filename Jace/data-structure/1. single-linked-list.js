class SingleLinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	// 맨 끝에 노드를 붙이는 메소드
	append(element) {
		const node = new Node(element)
		let current

		if (!this.head) {
			this.head = node
		} else {
			current = this.head

			while (current.next) {
				current = current.next
			}

			current.next = node
		}

		++this.size
	}

	// 특정 위치에 노드를 붙이는 메소드
	insertAt(position, element) {
		if (position < 0 || position > this.size) {
			return
		}

		const node = new Node(element)
		let current = this.head
		let previous = 0
		let count = 0

		if (position === 0) {
			node.next = current
			this.head = node
		} else {
			while (count < position) {
				++count
				previous = current
				current = current.next
			}

			previous.next = node
			node.next = current
		}

		++this.size
	}

	// 특정 위치의 노드를 없애는 함수
	removeAt(position) {
		if (position < 0 || position > this.size) {
			return
		}

		let current = this.head
		let previous = 0
		let count = 0

		if (position === 0) {
			this.head = current.next
		} else {
			while (count < position) {
				++count
				previous = current
				current = current.next
			}
			previous.next = current.next
		}

		--this.size
	}

	// 특정 요소의 인덱스를 구하는 메소드
	indexOf(element) {
		let current = this.head
		let index = 0

		while (current) {
			if (current.element === element) {
				return index
			}

			++index
			current = current.next
		}

		return -1
	}

	// 특정 요소를 지우는 메소드
	remove(element) {
		return this.removeAt(this.indexOf(element))
	}

	// 현재 링크드 리스트의 요소 개수를 반환하는 메소드
	length() {
		return this.size
	}

	// 현재 링크드 리스트가 비어있는지 확인하는 메소드
	isEmpty() {
		return this.size ? false : true
	}

	printAll() {
		let current = this.head
		let list = ''

		while (current) {
			list += `${current.element} - `
			current = current.next
		}

		return list
	}
}

class Node {
	constructor(element, next = null) {
		this.element = element
		this.next = next
	}
}
