

const Data = ({book}) => {
   console.log(book);
  return (
    

    <div>

{
book&&

    book.map((item) => { return (

<div>

    {item.title}
</div>

    )})
}
    </div>
  )
}

export default Data