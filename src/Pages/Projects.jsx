import React from 'react'
import Navbar from '../Components/Navbar'
import { Box,Stack,Card,CardContent,CardMedia, Typography } from "@mui/material";
 import data from '../Components/data';
import './Pages.css'


const Projects = () => { 
  return (
     <div className='project_container' >
     
       
       <Typography variant='h4' textAlign="center" marginBottom=".8em" fontSize="1.5rem " color='white'>Few of my works</Typography>
      <Box sx={{px:{md:0,xs:4},py:{xs:2},marginLeft:"auto",marginRight:"auto",width:{md:"80%",sm:"50%",xs:"80%"},height:"380px"}}>
        
            <Stack sx={{flexDirection:{md:"row",xs:"column",sm:"column"},gap:{md:3,xs:6},flexWrap:"wrap",justifyContent:"center"}}>
            {data.map((item)=>{return<Card  sx={{width:{md:'320px', sm:"320px",xs:'100%'},bordeShadow:"none"}}>

                    <CardMedia image={item.img} alt="" sx={{width:{xs:"100%"},objectFit:"contain",height:{md:"250px" ,xs:"300px"}}}/>
                    
                    <CardContent sx={{height:{md:'100px',xs:"150px"},backgroundColor:"#F29878" ,color:"white" }}>
                        <Typography style={{color:"#163977",fontSize:".75rem"}}>{item.description}</Typography>
                        <Stack direction="row" justifyContent="space-between" py={1} fontSize=".75rem">
                            <a className='code_btn' href={item.url.code}>code</a>
                            <a className='code_btn' href={item.url.demo}>demo</a>
                        </Stack>  
                   </CardContent>

                </Card>})}
                </Stack>
        </Box>
      
      </div>
  )
}

export default Projects