const handle = document.querySelector('form')
const search = document.querySelector('input')

handle.addEventListener('submit', (e) => {
   e.preventDefault(); //prevent refreshing after click search
    const srch = search.value
    console.log("Loading...")
    window.history.pushState('page2', 'Title', '/?handle='+srch);//provides an interface for manipulating the browser session history
    location.reload();//for reloading or refreshing after pushing the page
})