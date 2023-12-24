
const Previous = ({information}) => {

    let newindex = information.length-1
    let urlcontent = information[newindex]
    let BreedInfo = null
    if (urlcontent && urlcontent.breeds && urlcontent.breeds.length > 0){
        BreedInfo = urlcontent.breeds[0]
    }
    

    return(
        <div>
            { urlcontent ? (
            <>
           <img height ="100px" width="100px" src={urlcontent.url}/>
           <p>A {BreedInfo.name} cat from {BreedInfo.origin}</p>
           </>
            ): 
            (<div></div>)
            }
        </div>
    );
};

export default Previous;
