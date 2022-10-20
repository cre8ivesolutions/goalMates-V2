import { useState } from 'react' 
import { Link } from 'react-router-dom'

function UserItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '70vw',
        'min-height': '20vh',
        'border': '.25em solid black',
        'margin': '.25em',
        // 'justify-content': 'center',
    }
    
    const detailStyle = {
        'display': 'flexbox',
        'width': '80vw',
        'min-height': '20vh',
        'padding': '.25em',
        'text-align': 'center',
        'border': '.25em solid grey',
        'margin': '1em',
        // 'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'white',
        'text-shadow':
         '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.username}</h3>
                {/* <h4>{props.item.collectionName}</h4> */}
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h3>{props.item.username}</h3>
                <h4>
                    <Link to={`/user/${props.item.user_id}`}>
                        {props.item.username}
                    </Link>
                </h4>
                <h4>
                    <Link to={`/user/${props.item.user_id}`}>
                        {props.item.username}
                    </Link>
                </h4>

            </div>
        )
    }

    return (
        <div onClick={() =>setView(!view)} style={{'display': 'inline-flexbox', 'textAlign': 'center'}}>

            {view ? detailView() : simpleView()}
        </div>
    )
}

export default UserItem