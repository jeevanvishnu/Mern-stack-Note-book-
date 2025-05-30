import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import RateLimitUl from '../components/RateLimitUl'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import api from '../lib/axios'
import NotesNotFound from '../components/NotesNotFound'

const HomePage = () => {
    const [isRateLimit , setIsRateLimit] = useState(false)
    const [notes , setNotes] = useState([])
    const [IsLoading , setIsLoading] = useState(true)
    

    useEffect(()=>{
        const fetchNote = async () =>{

            try {
                const res = await api.get('/notes')
                console.log(res.data)
                setNotes(res.data)
                setIsRateLimit(false)
               
                
                
            } catch (error) {
                console.log(error , "Error Featching notes");
                if(error.response?.status === 429){
                    setIsRateLimit(true)
                }else{
                    toast.error("Failed to load notes")
                }
                
            } finally{
                setIsLoading(false)
                 
            }
        }
        fetchNote()
    },[])
  return (
    <div className='min-h-screen'>
        <Navbar/>

        {isRateLimit && <RateLimitUl/>}

        <div className='max-w-7xl mx-auto p-4 mt-6'>
            {IsLoading && <div className="text-center text-primary py-10">Loading notes...</div>}

            {notes.length === 0 && !isRateLimit && <NotesNotFound/> }

            {notes.length > 0 && !isRateLimit && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note)=>(
                        <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default HomePage