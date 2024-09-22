// components
import Review from "../../components/Review/Review"

const ReviewsPage = () => {
  return (
    <div className="w-10/12 my-0 mx-auto pt-[50px] mb-[10%]">
        <h1 className="text-page-h1 font-bold font-Roboto text-center">Reviews</h1>

        <Review
            name='Juan Doe'
            date='09/10/2021'
            reviewHead='This site is beautifully made!'
            review='You can tell that the developers put a ton of effort and hard work to build this site and make it functional!'
        />
        <Review
            name='Ree L. Guy'
            date='01/02/2022'
            reviewHead='I am blown away!'
            review='Love the fact that this site was built with React.js! Keeps everything working fast and snappy.'
        />
        <Review
            name='Joshua Castle'
            date='01/12/2022'
            reviewHead='Went above and beyond my expectations!'
            review="Is that redux that I'm sensing? Very nice touch!"
        />
        <Review
            name='John Martin'
            date='02/05/2022'
            reviewHead='Utterly and completely satisfied!'
            review='I wish I had these developers on my team when I was building my website!'
        />
    </div>
  )
}

export default ReviewsPage
