"use client";

import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

import { useGetPostsQuery, useCreatePostMutation } from "../lib/services/jsonPlaceholderApi";
import { useState } from 'react';
// import { RootState } from 'global';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployer } from '@/lib/slices/employerSlice';
import type { RootState } from '../lib/store'

export default function Home() {
  const dispatch = useDispatch();
  const [newEmployer, setNewEmployer] = useState({ name: "", surname: ""})
  // const { data, error, isLoading, refetch } = useGetPostsQuery({});
  // const [createPost, {isLoading: isCreating, error: createError}] = useCreatePostMutation({});

  const employers = useSelector(
    (state: RootState) => state.employers.employersList
  )

  // if(isLoading) return <p> Loading ... </p>

  // if(createError) return <p> There was an error creating a post</p>

  // if(error) return <p> There was an error </p>

  const handleAddEmployer = () => { 
    // console.log(newEmployer)
    dispatch(addEmployer(newEmployer))
    // await createPost(newPost);
    // refetch();
  } 
  return (
    <main>
    <h1>Home</h1>
        <div>
          <input type="text" placeholder="Name..." onChange={(e) => setNewEmployer((prev) => ({...prev, name: e.target.value}))}/>
          <input type="text" placeholder="Surname..." onChange={(e) => setNewEmployer((prev) => ({...prev, surname: e.target.value}))}/>
          <button className="btn btn-neutral" onClick={handleAddEmployer}> Add Employer </button>
        </div>
        <div>
          {employers?.map((el: any, i: number) => {
            return(
              <div key={i}>
                <div>{el.name} {el.surname}</div>
              </div>
            )
          })} 
        </div>
</main>
  )
}
