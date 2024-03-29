import React from 'react'
import SearchSuggestItem from './searchSuggestItem'
import Link from 'next/link'

export default function SearchSuggest({ searchedItems, searchedQuery }) {
    return (

        searchedQuery.length >= 2 ? (<div className='absolute top-11 right-0 left-0 bg-white border'>
            <ul>
                <li className='text-sm border-b p-2 flex items-center'>
                    <Link href=''>
                        <a>
                            <p>  جست و جو محصول  :
                                {searchedQuery}
                            </p>
                        </a>
                    </Link>
                </li>
                {searchedItems.map(searchedItem => (
                    <SearchSuggestItem searchedItem={searchedItem} />
                ))
                }
            </ul>
        </div>) : ''

    )
}
