/*
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


chrome.extension.sendRequest({name: "getOptions"}, function(response)
{
    insertIcon(response.icon);
    document.addEventListener("beforeload", beforeloadHandler, true);
});

// insert our replacement icon as the favicon for this site
function insertIcon(icon)
{
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
        
    link.href = icon;
    link.type = "image/png";
    link.rel = "shortcut icon";
        
    head.insertBefore(link, head.childNodes[0]);
}

// remove all favicon links from page before they load
function beforeloadHandler(e)
{
    if(e.target instanceof HTMLLinkElement && e.target.rel)
    {
        var link = e.target;
        var rel = link.rel.toLowerCase();
        
        if(rel == "shortcut icon" || rel == "icon")
            link.parentNode.removeChild(link);
    }
}