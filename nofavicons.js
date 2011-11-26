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

chrome.extension.sendRequest({name: "getPreferences"}, function(response)
{
    replaceIcons(response.iconType);
});

function replaceIcons(iconType)
{
    var icons = 
    {
        "page" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9QTFRF////AAAAAAAAAAAAAAAAc3Z4iIqNiIuOlpiaq6yu4ePk7e7v8PHy8/T09fb29vf3+fn6+vr6+/v8/f3+////XEvC3AAAAAV0Uk5TAAQTZm7KxAyxAAAAXElEQVQYV3XNSRKAIAxE0YgQRUCm3P+sRpBUieVb/kU3wJfGZpOA1FgpSM4zSyjBB2ZpFKQQ2c7ME2JiBzOqh1TYPTxCqbU//YZHnkJ273C6Kdx60EasLcCiBMAFU/kIzx0NylkAAAAASUVORK5CYII=",
        "none" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVQ4EWP8//8/AyWAiRLNIL2jBoyGwWg6gOSigc8LAGOaAx0s99CyAAAAAElFTkSuQmCC",
        "default" : "chrome://favicon"
    };
   
    var head = document.getElementsByTagName("head")[0]; 
    var links = head.getElementsByTagName("link");   
    var found = false;
    var link;

    // search document for favicon links and replace the image with ours
    for(var i = 0; i < links.length; i++) 
    {   
        link = links[i];
        var rel = link.getAttribute("rel");   
         
        if(rel == "shortcut icon" || rel == "icon") 
        {   
            link.href = icons[iconType];
            link.type = "image/png";
            found = true;
        }  
    }  
        
    // if none are found, create a link to our image for consistency
    if(!found)
    {
        link = document.createElement("link");
        
        link.href = icons[iconType];
        link.type = "image/png";
        link.rel = "shortcut icon";
        
        head.insertBefore(link, head.childNodes[0]);
    }
}