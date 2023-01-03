import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Sailor Moon' ]);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory  
        // setCategories={ setCategories }
          onNewCategory={ (value) => onAddCategory(value) }
        />

        {/* listado de tarjetas */}
          {categories.map((category) => (
                <GifGrid 
                  key={ category } 
                  category = { category }/>
              ))
          }
            {/* gif Item */}
    </>

  )
}
