import React from 'react'
import Poster from '../Components/Poster'
import Rows from '../Components/Rows';
import Requests from '../Request';

export default function Home() {
  return (
    <div>
        <Poster/>
       <Rows rowId="1" title="Popular" fetchData={Requests.requestPopular} />
       <Rows rowId="2" title="Top Rated" fetchData={Requests.requestTopRated} />
       <Rows rowId="3" title="Trending" fetchData={Requests.requestTrending} />
       <Rows rowId="4" title="Up Coming" fetchData={Requests.requestUpcoming} />
       {/* <Rows title="Horror" fetchData={Requests.requestHorror} /> */}

    </div>
  )
}
