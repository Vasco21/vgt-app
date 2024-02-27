import styled from 'styled-components'; 
export const Container = styled.div`


.contact-containter .contact-header h1{
    text-align: center;
    font-size: 50px;
    font-family: cursive;
    color: black;
}
.contact-header p{
    text-align: center;
    font-size: 19px;
    font-family: "Poppins Light";
    color: black;
}
.inTouch{
    width:1330px;
    height: 700px;
    padding:20px;
    margin: 30px auto;
    border-radius:40px;
    box-shadow: 0px 0px 15px 2px Gold;
}
.home-about-social {
    text-align: center !important;
    padding-top: 25px;
    color: white !important;
  }
.home-about-social-links {
    justify-content: center !important;
    padding-top: 15px !important;
    display: inline-block !important;
    position: relative !important;
    padding-inline-start: 0 !important;
  }
.home-social-icons {
    position: relative !important;
    display: inline-block !important;
    width: 40px !important;
    height: 40px !important;
    text-align: center !important;
    font-size: 1.2em !important;
    line-height: 2em !important;
    background: rgba(255, 255, 255, 0.972) !important;
    border-radius: 50% !important;
    transition: 0.5s !important;
  }

.social .social-icons {
    display: inline-block !important;
    padding-right: 15px;
    padding-left: 15px;
  }
    
.contact-containter .contact-liner h1{
    text-align: left;
    font-weight: 1000;
    color:black;
}
.inTouch .colz-icons i {
    color: black;
    padding: 10px;
    padding-left: 7px;
    margin-right: 20px;
}
.inTouch .colz-icons i:hover {
    transform: scale(1.5)
}
.formWord{
    color:black;
    font-weight: 1000;
    height:550px;
}

.onMove{
    min-height: 50vh;
    display: grid;
    place-items: center;
}
.move{
    width:60vh;
    height:75vh;
    max-width: var(--fixed-width);
}
.formWord{
    background: var(--clr-primary-1);
    padding: 1.5rem 2rem;
    border-radius: 20px;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
}
.formWord input{
    width: 100%;
    height: 50px;
    border-radius: 7px;
}
.formWord textarea{
    width: 100%;
    height: 130px;
    font-size: 15px;
    
}
.formWord .send{
    color: White;
    font-size: 15px;
    background-color:black;
    
}
.send{
    border-radius: 20px;
    padding: 10px 0;
    width: 150px;
    font-family: "Poppins SemiBold";
}
.formWord .send:hover{
    background-color: Gold;
    color:#111;
}
.rows p{
    color: var( --clr-green-dark);
    font-size:15px;
}

@media screen and (max-width: 1280px){
.inTouch{
    padding:20px;
    margin: 30px auto;
    height: 650px;
    width:900px;
    }
.formWord{
    height: 500px;
    width: 450px;
    }
.onMove{
    min-height: 30vh;
    }
.move{
    height:45vh;
    }
.send{
    width: 130px;
    padding: 8px 0;    
    }   
}


@media screen and (max-width: 1025px){
.inTouch{
    padding:20px;
    margin: 20px auto;
    height:450px;
    width:700px;   
    }
.formWord{
    height: 397px;
    width: 397px;
    }  
.onMove{
    min-height: 35vh;
    }
.move{
    height:30vh;
    }
.formWord input{
    height: 35px;
    }
.formWord textarea{
    height:70px;
    }
    
}
@media screen and (max-width: 768px){
.inTouch{
    padding:20px;
    margin: 30px auto;
    height: 410px;
    width:450px;   
    }
.formWord{
    height:340px;
    width:300px;
    }
.onMove{
    min-height: 35vh;
    }
.move{
    height:30vh;
    }
.formWord input{
    height: 27px;
    }
.formWord textarea{
    height:50px;
    }
.send{
    width: 100px;
    padding: 6px 0;      
    }
}
@media screen and (max-width: 490px){
.inTouch{
    padding:20px;
    margin: 30px auto;
    height: 400px;
    width:350px;   
    }
.contact-containter .contact-liner h1{
    font-size: 40px;
    }
.formWord{
    height:300px;
    width:290px;
    }
  
.onMove{
    min-height: 20vh;
    }
.move{
    height:30vh;
    }
.formWord input{
    height: 27px;
    }
.formWord textarea{
        height:50px;
    }
.send{
    width:90px;
    padding: 6px 0;      
    }
}

@media screen and (max-width: 360px){
.inTouch{
    padding:20px;
    margin: 30px auto;
    height: 450px;
    width:250px;   
    }
.contact-containter .contact-liner h1{
    font-size: 35px;
    }
.formWord{
    height:300px;
    width:290px;
    }
  
.onMove{
    min-height: 20vh;
    }
.move{
    height:30vh;
    }
.formWord input{
    height: 27px;
    }
.formWord textarea{
        height:50px;
    }
.send{
    width:90px;
    padding: 6px 0;      
    }  
}
 `

