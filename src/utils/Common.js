/* 
    Common Utility Functions that can be reused through out the application.
    DD - 8/8/2018
*/

export function capitalizeWord(word){
    return word.replace(/^\w/, c => c.toUpperCase());
}

export function isMobile(){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        return true;
    }
    return false;
}

