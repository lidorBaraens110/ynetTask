import React, { useEffect, useState } from 'react';
import './App.css';
import data from './data/data.json';
import BCOption from './data/bcOption.json'
const imgUrl = 'https://images.ctfassets.net/u0haasspfa6q/2sMNoIuT9uGQjKd7UQ2SMQ/1bb98e383745b240920678ea2daa32e5/sell_landscape_photography_online';

function App() {

  const [category, setCategory] = useState({
    BC: BCOption[0].value,
    name: data.category
  });

  const handleChangeName = e => {
    const { value } = e.target
    setCategory(pre => {
      return { ...pre, name: value }
    })
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    const ENValue = BCOption.find(val => val.value === value)
    setCategory(pre => {
      return { ...pre, [name]: ENValue.value }
    })
  }

  useEffect(() => {
    console.log(category)
  }, [category])

  return (
    <div dir='rtl' className='container'>
      <div dir='rtl' className='card'>
        <div className='img-wrapper'>
          <img src={imgUrl} className='hover-zoom' />
        </div>
        <div className='card-content'>
          <div>
            <span className='category' style={{ backgroundColor: category.BC }}>{category.name}</span>
          </div>
          <p className='title'>{data.title}</p>
          <p className='sub-title'>{data.text}</p>
          <div>
            <span className='author'>{data.author}</span>
          </div>
        </div>
      </div>

      <div className='wrap-editor'>

        <div className='editor'>
          <div className='edit-bc'>
            <span className='cat-edit'>צבע רקע-שם הקטגוריה</span>
            <select name='BC' onChange={handleChange} >
              {BCOption.map((op, i) => {
                return <option key={i} value={op.value}>{op.name}</option>
              })}
            </select>
          </div>
          <div className='edit-name'>
            <span className='cat-edit'>שם הקטגוריה</span>
            <input type='text' value={category.name} onChange={handleChangeName} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
/* A. Create a component like in a sketch folder that includes:
            1. component with fixed height and width. Add box shadow to your component (you can see an example example2904.png)
            2. image, with fixed height and width,  should be with zoom animation on hover
            3. category name - with dynamic width due to the length of the text
            4. title - with dynamic height due to the length of the text, maximum 2 rows
            5. sub title - with dynamic height due to the length of the text, maximum 3 rows
            6. author name - with dynamic width due to the length of the text

In the example (test-absolute.html) all divs in component are in position absolute, just so you can use the placements and sizes.
You need to make it more dynamic and flexible.

  B.  Create div with fields for updating component:
        1. input to edit category name
        2. dropdown select to choose a background color of category name.
*/