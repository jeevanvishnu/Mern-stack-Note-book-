import { ArrowLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link , useNavigate} from 'react-router'
import api from '../lib/axios'
const CreatePage = () => {
  const [title , setTitle] = useState('')
  const [content , setContent] = useState('')
  const [isLoading , setIsLoading] = useState(false)
  const navigator = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    if(!title.trim() || !content.trim()){
      toast.error("All fields are required")
      return 
    }
    setIsLoading(true)

    try {

       await api.post('/notes',{
        title,
        content
      })
      toast.success("Notes Created Successfully")
      navigator("/")
      
      
    } catch (error) {
      console.log(error);
    if(error.response?.status === 429){
      toast.error("Slow down ! You're creating notes too fast",{
        duration:4000,
        icon:"💀"
      })
    }else{
      toast("Failed to create Notes")
    }
      
    }finally{
      setIsLoading(false)
    }

  }
  return (
    <div className='max-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <Link to={'/'} className="btn btn-ghost mb-6">
        <ArrowLeftIcon className='size-5'/>
        Back to Notes
        </Link>

        <div className='card bg-base-100'>
          <div className='card-body'>
            <h1 className='card-title text-2xl mb-4'>
                Create New Notes
            </h1>
                <form onSubmit={handleSubmit}>
                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>
                          Title
                      </span>
                    </label>
                    <input type="text" placeholder='Note Title' className='input input-bordered' value={title}
                    onChange={(e)=>setTitle(e.target.value)} />

                  </div>
                  
                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Content</span>
                    </label>
                    <textarea placeholder='Write your note here..'
                    className='textarea textarea-bordered h-32'
                    value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                  </div>

                  <div className='card-actions justify-end'>
                    <button type='submit' className='btn btn-primary ' disabled={isLoading}>
                      {isLoading ? "Creating..." : "Create Notes"}
                    </button>

                  </div>
                </form>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CreatePage