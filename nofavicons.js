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

if (document.documentElement instanceof HTMLElement)
{
    chrome.extension.sendRequest({name: "getPreferences"}, function(response)
    {
        replaceIcons(response.icon);
    });
}

function replaceIcons(icon)
{
    var head = document.getElementsByTagName("head")[0]; 
    var links = head.getElementsByTagName("link");   
    var found = false;
    var link;

    // search document for favicon links and replace the image with ours
    // or Chrome will use its default and we don't want that
    for(var i = 0; i < links.length; i++) 
    {   
        link = links[i];
        var rel = link.getAttribute("rel");   
         
        if(rel == "shortcut icon" || rel == "icon") 
        {   
            link.href = icon;
            link.type = "image/png";
            found = true;
        }  
    }  
        
    // if no icons are found, create a link to our image for consistency
    if(!found)
    {
        link = document.createElement("link");
        
        link.href = icon;
        link.type = "image/png";
        link.rel = "shortcut icon";
        
        head.insertBefore(link, head.childNodes[0]);
    }
}