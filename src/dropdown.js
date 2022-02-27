import axios from 'axios';
import React, { useEffect, useState } from 'react';

function dropdown() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users, setUsers] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(function () {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
            .then((error) => console.log(error));
    })
    return (
        <div>

            <select>
                {
                    users.map((user) => (
                        <option value={user.id}>{user.name}</option>
                    ))
                }
            </select>

        </div>
    );
};

export default dropdown;