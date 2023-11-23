export default function handleText(text:string){
    return [...text].map((l:string) => <span className='letter'>{l}</span>)
}
