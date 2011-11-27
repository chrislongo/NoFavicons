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
    document.addEventListener("beforeload", beforeloadHandler, true);
}

// remove all favicon links from page before they load
function beforeloadHandler(e)
{
    if(e.target instanceof HTMLLinkElement && e.target.rel)
    {
        var rel = e.target.rel.toLowerCase();
        
        // don't disable our own icon!
        if(e.target.id != "_nfi_icon" && 
           (rel == "shortcut icon" || rel == "icon"))  
        {
            e.target.setAttribute("disabled", "");
        }
    }
}