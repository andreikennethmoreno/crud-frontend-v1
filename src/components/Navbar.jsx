export default function Navbar({ onOpen }) {
    return (
        <>
           <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* -- drop down <div></div> */}
                {/* ++ logo */}
                <a className="btn btn-ghost text-xl">ClientManager</a>
                {/* ++ search input */}
                
            </div>
            <div className="navbar-center">
                <div className="form-control">
                    {/* w-48 */}
                    <input type="text" placeholder="Search" className=" input input-bordered w-48 md:w-auto" />
                </div>
                
            </div>
            <div className="navbar-end">
                {/* -- svg burrnos divs */}
                {/* ++ add modal on clcik button  */}

                <button onClick={onOpen} className="btn btn-primary">Add Client</button>

            </div>
            </div>
</>
    )
}