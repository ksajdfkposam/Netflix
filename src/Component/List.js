import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/api';

const List = ({ title, param }) => {
    const [list, setList] = useState([]);

    
 console.log(list)
    return (
        <div className="listt">
            <div className="list-1">
                <h1 className="text-light ms-3 fw-bolder mb-4 pt-4 fs-2">{title}</h1>
                <div className="d-flex">
                <div className="list-box ms-3 me-3 d-flex gap-2 text-light">
                             
                             <img
                                 className="list-box-1"
                                 src="https://lumiere-a.akamaihd.net/v1/images/image_174b2bb6.jpeg?region=0%2C0%2C1400%2C2100" // Update for dynamic image
                                 alt={'Movie'}
                             />
                             <div className="overlay">
                                 <div className="text">Fight Club</div>
                             </div>
                         </div>
                    
                


               
             
                <div className="list-box ms-3 me-3 d-flex gap-2 text-light">
                             
                <img
                                 className="list-box-1"
                                 src="https://wallpapercave.com/wp/wp1946074.jpg" // Update for dynamic image
                                 alt={'Movie'}
                             />
                             <div className="overlay">
                                 <div className="text">Avatar</div>
                             </div>
                         </div>
                    
                







               
               
                <div className="list-box ms-3 me-3 d-flex gap-2 text-light">
                             
                <img
                                 className="list-box-1"
                                 src="https://tse2.mm.bing.net/th?id=OIP.Gg2xj5U52L3mp19Jbu1QFAHaKL&pid=Api&P=0&h=180" // Update for dynamic image
                                 alt={'Movie'}
                             />
                             <div className="overlay">
                                 <div className="text">Matrix</div>
                             </div>
                         </div>
                    
                








              
              
                <div className="list-box ms-3 me-3 d-flex gap-2 text-light">
                             
                <img
                                 className="list-box-1"
                                 src="https://tse1.mm.bing.net/th?id=OIP.ENVHHrv5oY9Fk-7v14YqlAHaLE&pid=Api&P=0&h=180" // Update for dynamic image
                                 alt={'Movie'}
                             />
                             <div className="overlay">
                                 <div className="text">Once upon a time in hollywood</div>
                             </div>
                         </div>
                    
             









               
               
                <div className="list-box ms-3 me-3 d-flex gap-2 text-light">
                             
                <img
                                 className="list-box-1"
                                 src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e22ff753131197.596c4c560ae3b.jpg" // Update for dynamic image
                                 alt={'Movie'}
                             />
                             <div className="overlay">
                                 <div className="text">John Wick 2</div>
                             </div>
                         </div>
                    
               








             
           
                <div className="list-box ms-3 me-3 d-flex gap-2 text-light">
                             
                <img
                                 className="list-box-1"
                                 src="https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg" // Update for dynamic image
                                 alt={'Movie'}
                             />
                             <div className="overlay">
                                 <div className="text">Justice League</div>
                             </div>
                         </div>
                    
              </div>



            </div>
        </div>
    );
};

export default List;
