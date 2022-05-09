const questions = document.querySelectorAll('.qs');
questions.forEach(question=> {
    question.onclick = function() {
        if(!this.nextElementSibling.className.includes('open_list')) {
            for(i=0;i<questions.length;i++){questions[i].nextElementSibling.classList.remove('open_list');questions[i].lastElementChild.classList.remove('rt')};
            this.nextElementSibling.classList.add('open_list');
            this.lastElementChild.classList.add('rt');
        }else {
            this.nextElementSibling.classList.remove('open_list');
            this.lastElementChild.classList.remove('rt');
        }
    }
});