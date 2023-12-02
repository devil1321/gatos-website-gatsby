export const handleAnchorColor = (color:string) =>{
    const anchors = document.querySelectorAll('.main-container a') as NodeListOf<HTMLAnchorElement>
    anchors.forEach((a:HTMLAnchorElement) =>{
        a.style.color = color
    })
}