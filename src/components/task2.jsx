const databaseimage = ["./images/profile1.png", "./images/suzuka.jpg"];
const databaseprofile = [
    {
        name: "nobita",
        email: "nobitaabc@gmail.com",
        phone: "880-720-555-1234"
    },
    {
        name: "suzuka",
        email: "abcsuzuka@gmail.com",
        phone: "880-720-555-5678"
    }
];
// function to pic data,image and template by pass the index value
export const Avatar = ({ index }) => {
    const image = databaseimage[index];
    const profile = databaseprofile[index];


    if (!profile) return <div>Profile not found.</div>;

    return (
        <div className="container my-4 d-flex justify-content-center py-2">
            <div className="card shadow" style={{ width: "50rem" }}>
                <div className="card-header bg-dark text-white text-center fw-bold fs-5">User Profile {index + 1}</div>
                <div className="card-body p-0">
                    <table className="table table-bordered table-dark mb-0 align-middle">
                        <tbody>
                            <tr>
                                <td className="text-center" rowSpan="3" style={{ width: "35%", backgroundColor: "#2c3034" }}>
                                    <img src={image} alt="avatar" className="img-fluid rounded-circle border border-secondary shadow-sm" style={{ maxWidth: "auto" } }/>
                                </td>
                            <th style={{ width: "20%" }} className="ps-3 text-info">Name</th>
                                <td className="ps-3 text-capitalize text-warning">{profile.name}</td>
                            </tr>
                            <tr>
                                <th className="ps-3 text-info">Email</th>
                                <td className="ps-3 text-danger">{profile.email}</td>
                            </tr>
                            <tr>
                                <th className="ps-3 text-info">Phone</th>
                                <td className="ps-3 text-success">{profile.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );

};


// to final send to the app file 
export const Avatarcombo = () => {
    return (
        <>
            {/* <div className="mb-5">This avatar combo is calling:</div> */}
            <div className="">
                <div>
                    <Avatar index={0} />
                </div>
                <div>
                    <Avatar index={1} />
                </div>
            </div>
            </>
    );
};


export const Imagepicker =({index})=>{
    let imagepic = databaseimage[index];
    return<> 
    
     <div className="container mb-5 col-10 "> <h1 className="text-success">Imagepicker function is calling...</h1></div> 
    <div className=" d-flex flex-row p-3 border border-dark rounded shadow-lg mb-4">
       
        <div>
            <img src={imagepic} className="img-fluid rounded-top" alt="profile pic"
            />
            
        </div>
        <div className="mt-5"> <h1 className="mt-5 col-12 text-primary"> Hi all , requirements are excuted completly. !</h1>
        <h1 className="text-center mt-5 text-danger">Thanks !</h1></div>
        
    </div>
    </>
};
