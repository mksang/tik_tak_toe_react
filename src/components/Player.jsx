import { useState } from "react"

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false)
    function handleOnClick() {
        setIsEditing(editing => !editing)
    }
    function handleOnChange (event) {
        setPlayerName(event.target.value)
    }
    let editableNlayerName = <span className="player-name">{playerName}</span>
    // let buttonCaption = 'Edit'
    if(isEditing){
        editableNlayerName = <input type='text' required defaultValue={playerName} onChange={handleOnChange}/>
        // buttonCaption="Save"
    }


    return (
        <li>
            <span className="player">
                {editableNlayerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleOnClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}