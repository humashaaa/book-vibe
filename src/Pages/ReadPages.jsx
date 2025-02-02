import { useLoaderData} from 'react-router-dom';
import { getStoredBooklist } from '../Localstorage';



import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { useEffect, useState } from 'react';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
const ReadPages = () => {

    const books = useLoaderData()


    const [readBooklist, setReadBooklist] = useState([])
    const storedBookids = getStoredBooklist()
    

    useEffect(()=> {
      if(books.length > 0){
          const myBooklist = books.filter(book => storedBookids.includes(book.bookId))
          setReadBooklist(myBooklist);
      }

  },[storedBookids, books]);



    return (
        <div className='mt-24 ml-20'>
            <BarChart
      width={1300}
      height={500}
      data={readBooklist} 
      
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {books.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>
    );
};

export default ReadPages;