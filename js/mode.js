const mode = document.querySelector('.mode');
mode.addEventListener('click', setMode);
if(window.localStorage.getItem('dark')) {
    mode.classList.add(window.localStorage.getItem('dark'));
    document.body.classList.add(window.localStorage.getItem('darkn'));
}
function setMode() {
    if(!this.className.includes('dark')) {
        this.classList.add('dark');
        document.body.classList.add('darkness');
        window.localStorage.setItem('dark', 'dark');
        window.localStorage.setItem('darkn', 'darkness');
    }else {
        this.classList.remove('dark');
        document.body.classList.remove('darkness');
        window.localStorage.clear();
    }
}