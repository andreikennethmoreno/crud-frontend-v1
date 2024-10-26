export default function TableList({ onOpen}) {
    {/* make table of sample sata */}
    const tableData = [
        { id: 1, name: "Cy Ganderton", email:"helloworld1@gmail.com", job: "Quality Control Specialist", rate: 100, status: true },
        { id: 2, name: "Hart Hagerty", email:"helloworld1@gmail.com", job: "Desktop Support Technician", rate: 200, status: false },
        { id: 3, name: "Brice Swyre", email:"helloworld1@gmail.com", job: "Tax Accountant", rate: 150, status: false },
    ];

    return (
        <>
        {/* ++mt-10 */}
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    {/* ++status rate */}
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Rate</th>
                    <th>Status</th>
                    <th></th>
                    <th></th>

                
                </tr>
                </thead>
                {/* ++ hover */}
                <tbody className="hover">
                {/* row 1 */}
                    {tableData.map((item) => (
                        <tr key={item.id} className="hover">
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.job}</td>
                            <td>{item.rate}</td>
                            {/* ++button logic ++rounded-full w-20  */}
                            <td>
                                <button
                                    className={`btn rounded-full w-20 ${item.status ? 'btn-primary' : 'btn-outline btn-primary'}`}>
                                    {item.status ? 'Active' : 'Inactive'}
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-secondary " onClick={onOpen}>Update</button>
                            </td>
                            <td>
                                <button className="btn btn-accent">Delete</button>
                            </td>
                        </tr>
                    ))}
        
                </tbody>
            </table>
            </div>
        </>
    )
}