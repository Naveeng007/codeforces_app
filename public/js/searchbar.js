const handle = document.querySelector('form')
const search = document.querySelector('input')

handle.addEventListener('submit', (e) => {
   e.preventDefault(); //prevent refreshing after click search
    const srch = search.value
    console.log("Loading...")
    window.history.pushState('page2', 'Title', 'http://localhost:3000/?handle='+srch);
    location.reload();
})