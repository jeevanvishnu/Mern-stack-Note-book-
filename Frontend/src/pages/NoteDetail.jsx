import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router";

const NoteDetail = () => {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const featchNode = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNotes(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
        toast.error("Faild to node update");
      } finally {
        setIsLoading(false);
      }
    };
    featchNode();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () =>{
      if(!notes.title.trim() || !notes.content.trim()){
        toast.error("Form is required")
        return
      }
      setSaving(true)
      try {
        await api.put(`/notes/${id}`,notes)
        toast.success("Notes added sucessfully")
        navigate('/')
        
      } catch (error) {
        console.log(error)
        toast.error("Notes added Failed")
        
      }finally{
        setSaving(false)
      }
  }


  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="m-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2x1 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Notes
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" placeholder="Note Title" className="input input-bordered" value={notes.title}
              onChange={(e)=>setNotes({...notes,title:e.target.value})} />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea placeholder="Write your note here.." className="textarea textarea-bordered h-32" value={notes.content} onChange={(e)=> setNotes({...notes,content:e.target.value})}>

                </textarea>
              </div>

              <div className="form-actions justify-end">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}

                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
