import UserItem from "./userItem"

function UserGallery(props){

    const display = props.data.map((item,index) => {
        return (
            <UserItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default UserGallery