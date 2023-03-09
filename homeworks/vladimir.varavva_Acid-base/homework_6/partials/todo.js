function Todo() {

    this.doc = document;
    this.localStorage = localStorage;

    this.list = this.doc.querySelector('[data-list]');
    this.listItem = this.doc.querySelector('[data-list-item]');
    this.tasksTotalBlock = this.doc.querySelector('[data-tasks-total]');
    this.taskDoneBlock = this.doc.querySelector('[data-tasks-done]');
    this.taskUndoneBlock = this.doc.querySelector('[data-tasks-todo]');
    this.filtersList = this.doc.querySelector('[data-filters]');
    this.info = this.doc.querySelector('[data-info]');

    this.createBtn = this.doc.querySelector('[data-create]');
    this.removeAllBtn = this.doc.querySelector('[data-remove-all]');
    this.doneAllBtn = this.doc.querySelector('[data-done-all]');
    this.showDoneBtn = this.doc.querySelector('[data-show-done]');
    this.showUndoneBtn = this.doc.querySelector('[data-show-todo]');
    this.showAllBtn = this.doc.querySelector('[data-show-all]');
    this.filtersBtn = this.doc.querySelector('[data-filters-btn]');

    if (this.listItem) this.listItem.remove();
    this.tasksTotal = 0;
    this.tasksDone = 0;
    this.listenEvents();
}

Todo.prototype = {

    toLocalStorage: function() {
        this.localStorage.setItem('tasks', this.list.innerHTML);
        this.localStorage.setItem('tasksTotal', this.tasksTotal);
        this.localStorage.setItem('done', this.tasksDone);
    },

    updateCounters: function() {
        this.taskDoneBlock.innerHTML = this.tasksDone;
        this.tasksTotalBlock.innerHTML = this.tasksTotal;
        this.taskUndoneBlock.innerHTML = this.tasksTotal - this.tasksDone;
    },

    load: function() {
        if (this.localStorage.getItem('tasks')) {
            this.list.innerHTML = this.localStorage.getItem('tasks');
            this.tasksTotal = this.localStorage.getItem('tasksTotal');
            this.tasksDone = this.localStorage.getItem('done');
            this.updateCounters();
            this.createBtn.focus();
            if (this.list.children.length) {
                this.info.classList.add('hidden');
            }
        }
    },

    save: function(e) {
        this.elem = e.target;
        this.elem.readOnly = true;
        this.elem.setAttribute('value', this.elem.value);
        this.toLocalStorage();
    },

    create: function() {
        this.newElem = this.doc.createElement('li');
        this.list.appendChild(this.newElem);
        this.tpl = this.listItem.outerHTML;
        this.newElem.outerHTML = this.tpl;
        this.list.lastChild.children[1].focus();
        this.tasksTotal++;
        this.info.classList.add('hidden');
        this.updateCounters();
        this.toLocalStorage();
    },

    edit: function(e) {
        this.elem = e.target;
        if (this.elem.type === 'text') {
            this.elem.readOnly = false;
            if (this.elem.parentNode.children[0].checked) {
                this.elem.parentNode.children[0].checked = false;
                this.elem.parentNode.children[0].removeAttribute('value');
                this.elem.parentNode.children[1].classList.remove('done');
                this.tasksDone--;
                this.updateCounters();
            }
        }
    },

    remove: function(e) {
        this.del = e.target;
        if (this.del.hasAttribute('data-del')) {
            this.confirm = confirm('Remove this task?', '');
            if (this.confirm) {
                this.del.parentNode.remove();
                if (this.del.parentNode.children[0].checked) {
                    this.tasksDone--;
                }
                this.tasksTotal--;
                this.updateCounters();
                this.toLocalStorage();
                if (!this.list.children.length) {
                    this.info.classList.remove('hidden');
                    this.createBtn.focus();
                }
            }
        }
    },

    removeAll: function() {
        if (this.list.children.length) {
            this.confirm = confirm('Remove all tasks?', '');
            if (this.confirm) {
                this.list.innerHTML = '';
                this.tasksTotalBlock.innerHTML = this.tasksTotal = 0;
                this.taskDoneBlock.innerHTML = this.tasksDone = 0;
                this.taskUndoneBlock.innerHTML = 0;
                this.localStorage.removeItem('tasks');
                this.localStorage.removeItem('tasksTotal');
                this.localStorage.removeItem('done');
                this.info.classList.remove('hidden');
                this.createBtn.focus();
            }
        }
    },

    done: function(e) {
        this.done = e.target;
        if (this.done.checked && this.done.type === 'checkbox') {
            this.done.setAttribute('checked', 'checked');
            this.done.nextElementSibling.classList.add('done');
            this.tasksDone++;
        } else if (!this.done.checked && this.done.type === 'checkbox') {
            this.done.removeAttribute('checked', 'checked');
            this.done.nextElementSibling.classList.remove('done');
            this.tasksDone--;
        }
        this.updateCounters();
        this.toLocalStorage();
    },

    doneAll: function() {
        for (var i = 0; i < this.list.children.length; i++) {
            this.list.children[i].children[0].setAttribute('checked', 'checked');
            this.list.children[i].children[1].classList.add('done');
        }
        this.tasksDone = this.tasksTotal;
        this.updateCounters();
        this.toLocalStorage();
    },

    showFilters: function() {
        this.filtersList.classList.toggle('hidden');
    },

    hideFilters: function(e) {
        this.elem = e.target;
        if (this.elem.parentNode === this.filtersList) {
            this.filtersList.classList.add('hidden');
            this.toLocalStorage();
        }
    },

    showDone: function() {
        for (var i = 0; i < this.list.children.length; i++) {
            this.list.children[i].classList.remove('hidden');
            if (!this.list.children[i].children[0].checked) {
                this.list.children[i].classList.add('hidden');
            }
        }
    },

    showUndone: function() {
        for (var i = 0; i < this.list.children.length; i++) {
            this.list.children[i].classList.remove('hidden');
            if (this.list.children[i].children[0].checked) {
                this.list.children[i].classList.add('hidden');
            }
        }
    },

    showAll: function() {
        for (var i = 0; i < this.list.children.length; i++) {
            this.list.children[i].classList.remove('hidden');
        }
    },

    moveUp: function(e) {
        this.elem = e.target;
        if (this.elem.hasAttribute('data-up')) {
            if (this.elem.parentNode.parentNode !== this.list.children[0]) {
                this.list.insertBefore(this.elem.parentNode.parentNode, this.elem.parentNode.parentNode.previousSibling);
                this.updateCounters();
                this.toLocalStorage();
            }
        }
    },

    moveDown: function(e) {
        this.elem = e.target;
        if (this.elem.hasAttribute('data-down')) {
            if (this.elem.parentNode.parentNode !== this.list.children[this.list.children.length - 1]) {
                this.list.insertBefore(this.elem.parentNode.parentNode.nextSibling, this.elem.parentNode.parentNode);
                this.updateCounters();
                this.toLocalStorage();
            }
        }
    },

    change: function(e) {
        this.elem = e.target;
        this.elem.previousElementSibling.disabled = false;
    },

    focus: function(e) {
       this.focused = e.target;
    },

    unfocus: function() {
        this.focused = null;
    },

    keyboard: function(e) {
        if (this.focused && this.focused.tagName === 'INPUT') {

            if (e.keyCode === 13) {
                if (this.focused.readOnly) {
                    if (this.focused.previousElementSibling.checked) {
                        this.focused.previousElementSibling.removeAttribute('checked', 'checked');
                        this.focused.classList.remove('done');
                        this.tasksDone--;
                    } else if (!this.focused.previousElementSibling.checked) {
                        this.focused.previousElementSibling.setAttribute('checked', 'checked');
                        this.focused.classList.add('done');
                        this.tasksDone++;
                    }
                    this.unfocus();
                } else if (!this.focused.readOnly) {
                    this.focused.setAttribute('readonly', 'readonly');
                    this.focused.setAttribute('value', this.focused.value);
                }
            }

            else if (e.keyCode === 27 && this.list.children.length) {
                this.confirm = confirm('Remove this task?', '');
                if (this.confirm) {
                    this.focused.parentNode.remove();
                    if (this.focused.previousElementSibling.checked) {
                        this.tasksDone--;
                    }
                    this.tasksTotal--;
                    this.unfocus();
                    if (!this.list.children.length) {
                        this.info.classList.remove('hidden');
                        this.createBtn.focus();
                    }
                }
            }

            else if (e.keyCode === 38) {
                if (this.focused.parentNode !== this.list.children[0]) {
                    this.list.insertBefore(this.focused.parentNode, this.focused.parentNode.previousSibling);
                }
            } else if (e.keyCode === 40) {
                if (this.elem.parentNode !== this.list.children[this.list.children.length - 1]) {
                    this.list.insertBefore(this.elem.parentNode.nextSibling, this.elem.parentNode);
                }
            }
            this.updateCounters();
            this.toLocalStorage();
        }
    },

    listenEvents: function() {
        if (window.location.pathname === '/todo.html') {
            this.doc.addEventListener('DOMContentLoaded', this.load.bind(this));
            this.createBtn.addEventListener('click', this.create.bind(this));
            this.doc.addEventListener('input', this.change.bind(this));
            this.doc.addEventListener('change', this.save.bind(this));
            this.doc.addEventListener('click', this.remove.bind(this));
            this.removeAllBtn.addEventListener('click', this.removeAll.bind(this));
            this.doc.addEventListener('dblclick', this.edit.bind(this));
            this.doc.addEventListener('click', this.done.bind(this));
            this.doneAllBtn.addEventListener('click', this.doneAll.bind(this));
            this.filtersBtn.addEventListener('click', this.showFilters.bind(this));
            this.doc.addEventListener('click', this.hideFilters.bind(this));
            this.showDoneBtn.addEventListener('click', this.showDone.bind(this));
            this.showUndoneBtn.addEventListener('click', this.showUndone.bind(this));
            this.showAllBtn.addEventListener('click', this.showAll.bind(this));
            this.doc.addEventListener('click', this.moveUp.bind(this));
            this.doc.addEventListener('click', this.moveDown.bind(this));
            this.doc.addEventListener('keydown', this.keyboard.bind(this));
            this.doc.addEventListener('focusin', this.focus.bind(this));
            this.doc.addEventListener('focusout', this.save.bind(this));
        }
    }
};

module.exports = new Todo();
