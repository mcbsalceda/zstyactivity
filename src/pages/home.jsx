import { useEffect, useState } from "react"
import { htmlToText } from "html-to-text" 

export function Home() {
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch('https://www.zesty.io/-/gql/platform_section.json')
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error fetching platform sections:', error))
    }, [])

    return (
        <>
            {item.map(section => (
            <div key={section.id}>
                <h1>{section.title}</h1>
                
                <div>{htmlToText(section.text_content)}</div>
            </div>
            ))}
        </>
    )
}