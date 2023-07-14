import '../App.css'

function Profile(props) {
    return (
        <div className='profile col-md-4'>
            <img src={props.img} alt={props.title} title={props.title}/>
            <h2 className='text-center'>{props.title}</h2>
        </div>
    )
}

export default Profile
