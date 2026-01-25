const databaseimage = ["./components/images/profile1.png", "./components/images/profile1.png"];
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

export const Avatar = ({ index }) => { 
    const image = databaseimage[index];
    const profile = databaseprofile[index];

 
    if (!profile) return <div>Profile not found.</div>;

    return (
        <div className="avatar-container height-50 width-auto m-3 p-3 bv">
            <table   className="p-3" style={{ border: "2px solid black", width: '100%' ,backgroundColor: '#1d1c1c', height: '150px',maxWidth: '400px', color: 'white' }}>
                <thead>
                    <tr><h3 className="m-auto">user profile</h3></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="me-3">
                            <img src="./images/profile1.png" alt={`${profile.name}'s avatar`} width="50" />
                        </td>
                        <td>
                            <strong>Name:</strong> {profile.name} <br />
                            <strong>Email:</strong> {profile.email} <br />
                            <strong>Phone:</strong> {profile.phone}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

 

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
