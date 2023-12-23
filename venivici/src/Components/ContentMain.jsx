

const ContentMain = ({onSubmit, content, information}) => {
    return(
        
        <div>
            <h1>Veni Vici!</h1>
            <h3>Discover cats from your wildest imaginations!</h3>
            
            <h4>{information[0].alt_names}</h4>
            <div>
                <button>{information[0].origin}</button>
                <button>{information[0].name}</button>
                <button>{information[0].life_span} years</button>
                <button>{information[0].weight.metric}</button>
            
            </div>
            
            <img height="500px" width="500px" src={content && content.url}/>
            <button className='fetch-button' onClick={onSubmit}>Fetch a Random Cat!</button>
        </div>

        
    )
}


export default ContentMain;