export const New = ({data}) => {

    const {title,body}=!!data && data;
console.log(title)
 return (
   <div className="noticia">
       <h2>{title}</h2>
       <p>"{body}"</p>
   </div>
 )
}
