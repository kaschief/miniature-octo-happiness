import { useState, useEffect } from 'react'

const StatelessDataLoader = () => {

	const [data, setData] = useState([])

	/*useEffect -->  serves the same purpose as
	componentDidMount, componentDidUpdate, and componentWillUnmount


	must ALWAYS insert empty array at the end of useEffect
	(array of dependenices)
	When the array is empty, the effect runs only once
	else [data] -> the function will rerun depending on whether the value in the array changes
	*/

	useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setData(data)
      );
	}, [])

	/*
	second example (acting as mount then unmount)

useEffect(() => {

    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });

    return () => socket.disconnect(); //unmount

  }, []);

	*/

	return (
					<div>
							<ul>
									{data.map(el => (
											<li key={el.id}>{el.title}</li>
									))}
							</ul>
				</div>
	)
};

export default StatelessDataLoader;