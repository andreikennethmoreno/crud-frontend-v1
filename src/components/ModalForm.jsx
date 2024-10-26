import { useState } from "react";


// ModalForm.js
export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
    const [rate, setRate] = useState('');
    const [name, setName] = useState(''); // State for Name
    const [email, setEmail] = useState(''); // State for Email
    const [job, setJob] = useState(''); // State for Job
    const [status, setStatus] = useState(''); // State for Status


    return (
        <>  

            <dialog id="my_modal_3" className="modal bg-black/40"  open={isOpen}>
            <div className="modal-box">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                <h3 className="font-bold text-lg py-4">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
                
                <form onSubmit={(e) => { e.preventDefault(); onSubmit();}}>

                    <label className="input input-bordered flex items-center my-4 gap-2">
                    Name 
                    <input type="text" className="grow"  value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label className="input input-bordered flex items-center my-4 gap-2">
                    Email 
                    <input type="text" className="grow"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center my-4 gap-2">
                    Job 
                    <input type="text" className="grow"  value={job} onChange={(e) => setJob(e.target.value)}/>
                    </label>

                    {/* ++ made this anumber */}
                    <div className="flex mb-4 justify-between">
                        <label className="input input-bordered flex mr-4 items-center gap-2">
                        Rate
                        <input type="number" className="grow"  value={rate} onChange={(e) => setRate(e.target.value)}/>
                        </label>

                        <select className="select select-bordered w-full max-w-xs" onChange={(e) => setStatus(e.target.value)}>
                        <option>Inactive</option>
                        <option>Active</option>
                        </select>

                    </div>


                    <button type="submit" className=" btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
                </form>
                
            </div>
            </dialog>

        </>
        
    );
}
