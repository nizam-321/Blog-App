import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='bg-white shadow-md rounded-lg p-6 w-full md:w-64 mb-6 md:mb-0'>
        <div className='mb-6'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Categories</h2>
            <ul className='space-y-2'>
                <li><a href="#category1" className='text-blue-600 hover:underline'>Category 1</a></li>
                <li><a href="#category2" className='text-blue-600 hover:underline'>Category 2</a></li>
                <li><a href="#category3" className='text-blue-600 hover:underline'>Category 3</a></li>
                <li><a href="#category4" className='text-blue-600 hover:underline'>Category 4</a></li>
            </ul>
        </div>

        <div>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>Recent Posts</h2>
            <ul className='space-y-2'>
                <li><a href="#post1" className='text-blue-600 hover:underline'>Post Title 1</a></li>
                <li><a href="#post2" className='text-blue-600 hover:underline'>Post Title 2</a></li>
                <li><a href="#post3" className='text-blue-600 hover:underline'>Post Title 3</a></li>
            </ul>
        </div>

    </aside>
  )
}
