class CreateElement {
	constructor(tag, className, content) {
		this.tag = tag
		this.className = className
		this.content = content
	}

	createNewElement() {
		const newElement = document.createElement(this.tag)
		newElement.classList.add(this.className)
		newElement.textContent = this.content

		document.body.append(newElement)
	}
}

new CreateElement('p', 'paragraph', 'Новый текст!').createNewElement()

new CreateElement('h1', 'title', 'Заголовок').createNewElement()

new CreateElement('button', 'btn-primary', 'Кнопка').createNewElement()
