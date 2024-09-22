const Review = (props) => {
  return(
    <div className="w-full my-[3%] mx-auto text-page-p">
      <div className="review">
        <div className="text-[14px] text-[#cca869]">
          <p>{props.name}</p>
        </div>
        <div className="date-container text-[#5e5e5e] text-[14px] mb-3">
          <p>Reviewed on {props.date}</p>
        </div>
        <strong>{props.reviewHead}</strong>
        <p>{props.review}</p>
      </div>
    </div>
  )
}

export default Review
