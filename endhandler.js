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
        insertIcon(response.icon);
    });
}

// insert our replacement icon as the favicon for this site
function insertIcon(icon)
{
    var head = document.getElementsByTagName("head")[0]; 
    var link = document.createElement("link");
        
    link.id = "_nfi_icon";
    link.href = icon;
    link.type = "image/png";
    link.rel = "shortcut icon";
        
    head.insertBefore(link, head.childNodes[0]);
}