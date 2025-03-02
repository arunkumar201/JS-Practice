interface IDoublyLinkedListNode {
	key: number;
	value: number;
	prev: IDoublyLinkedListNode;
	next: IDoublyLinkedListNode;
}

class DoublyLinkedListNode implements IDoublyLinkedListNode {
	public prev: IDoublyLinkedListNode;
	public next: IDoublyLinkedListNode;

	constructor(public key: number, public value: number) {}
}

class LRUCache {
	private size: number = 0;
	private cache: Map<number, IDoublyLinkedListNode>;
	private head: IDoublyLinkedListNode;
	private tail: IDoublyLinkedListNode;

	constructor(private capacity: number) {
		if (capacity <= 0) throw new Error("Capacity must be greater than 0");

		this.cache = new Map();
		this.head = new DoublyLinkedListNode(0, 0);
		this.tail = new DoublyLinkedListNode(0, 0);
		this.connectNodes(this.head, this.tail);
	}

	get(key: number): number {
		const node = this.cache.get(key);
		if (!node) return -1;

		// Move to front - make it most recently used
		this.moveToFront(node);
		return node.value;
	}

	put(key: number, value: number): void {
		const existingNode = this.cache.get(key);

		if (existingNode) {
			existingNode.value = value;
			this.moveToFront(existingNode);
			return;
		}

	    const newNode = new DoublyLinkedListNode(key, value);
		this.cache.set(key, newNode);
		this.addToFront(newNode);
		this.size++;

		if (this.size > this.capacity) {
			this.removeLRUNode();
			this.size--;
		}
	}

	private connectNodes(
		node1: IDoublyLinkedListNode,
		node2: IDoublyLinkedListNode
	): void {
		node1.next = node2;
		node2.prev = node1;
	}

	private removeNode(node: IDoublyLinkedListNode): void {
		const prev = node.prev!;
		const next = node.next!;
		this.connectNodes(prev, next);
	}

	private addToFront(node: IDoublyLinkedListNode): void {
		const nextNode = this.head.next;
		this.connectNodes(this.head, node);
		this.connectNodes(node, nextNode);
	}

	private moveToFront(node: IDoublyLinkedListNode): void {
		this.removeNode(node);
		this.addToFront(node);
	}

	private removeLRUNode(): void {
		const lruNode = this.tail.prev!;
		this.removeNode(lruNode);
		this.cache.delete(lruNode.key);
	}
}

const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // 1
lruCache.put(3, 3);
console.log(lruCache.get(2)); // -1
lruCache.put(4, 4);
console.log(lruCache.get(1)); // -1
console.log(lruCache.get(3));
console.log(lruCache.get(4));
