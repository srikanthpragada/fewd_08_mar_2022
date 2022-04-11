import React, { useState } from 'react'
import $ from 'jquery'


export default function GithubUserInfo() {
    let [info, setInfo] = useState({})
    let [username, setUsername] = useState("srikanthpragada")

    function changeUsername(event) {
        setUsername(event.target.value)
    }

    function getInfo() {
        setInfo({})
        $.ajax(
            {
                url: `https://api.github.com/users/${username}`,
                method: 'get',
                success: function (response) {
                    setInfo(
                        {
                            name: response.name,
                            company: response.company,
                            url: response.avatar_url
                        }
                    )
                },
                error: function () {
                    alert("Sorry! Username not found!!!")
                }
            }
        ) // ajax()
    }

    function showInfo() {
        if (info.name)
            return (
                <div>
                    <h3>{info.name}</h3>
                    <h3>{info.company}</h3>
                    <img src={info.url} style={{ width: '300px', height: '300px' }}
                        alt="" />
                </div>
            )
    }

    return (
        <>
            Username : <input type="text" value={username} onChange={changeUsername} />
            <p></p>
            <button onClick={getInfo}>Get Info</button>
            {
               showInfo()
            }
        </>
    )
}
