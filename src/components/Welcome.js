import React , {useState,useEffect} from 'react';

const Welcome = () =>{
    const[gallaryData,setGallaryData]=useState([])

    const loadGallaryData=async()=>{
    //Query the API Gateway
    const resp = await fetch('https://4l4beffl30.execute-api.ap-southeast-2.amazonaws.com/prod/GalleryImages');
    let jsonData = await resp.json();
    //Assign response the data to our state variable
    setGallaryData(jsonData);
    }
    useEffect(() =>{
    //load the menu links data from the API
    loadGallaryData();
    },[])
        
    return(
        <div className="scene" id="welcome">
        <article className="content">
            <div className="gallery">
                {
                    gallaryData.map((gallary) =>
                    <img className={gallary.className} src={gallary.src} alt={gallary.alt} />
                    )
                }
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
        </article>
        </div>
    );
}

export default Welcome;