if (document.documentElement instanceof HTMLElement)
{
    document.addEventListener("beforeload", beforeloadHandler, true);
}

// remove all favicon links from page before load
function beforeloadHandler(e)
{
    if(e.target.rel && (e.target.rel == "shortcut icon" || e.target.rel == "icon"))
        disableElement(e.target);
}

function disableElement(element) 
{
    if(element.localName && element.localName.toLowerCase() == "link")
        element.setAttribute("disabled", "");
}