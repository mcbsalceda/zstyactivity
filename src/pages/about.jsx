import { useEffect, useState } from "react"
import { htmlToText } from "html-to-text"

export function About() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json')
            .then(response => response.json())
            .then(data => setContent(data.data[0].content.page_content))
            .catch(error => console.error('Error fetching platform sections:', error));
    }, [])

    return (
        <>
            <div>
                <div>{htmlToText(content)}</div>
            </div>
        </>
    )
}