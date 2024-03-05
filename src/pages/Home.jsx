
import '../pages/Home.css'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Header1 from '../components/Header1';

import Header3 from '../components/Header3';
import Header2 from '../components/Header2';


export default function Home() {
    return (
        <>
        <Header1/>
        <Header2/>
        <Header3/>
            <div className="bg01"> 
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
                    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
                </div>
                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active text-center mt-5">
                        <br /><br /><br />
                        <h1 className='text-white'>This Season is <span style={{ color: "rgb(12, 223, 12)" }}>Our</span></h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eveniet.</p>
                    </div>
                    <div className="carousel-item text-center  mt-5">
                        <br /><br /><br />
                        <h1 className='text-white'>Try Our New <span style={{ color: "rgb(12, 223, 12)" }}>Test</span></h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eveniet.</p>
                    </div>
                    <div className="carousel-item text-center  mt-5">
                        <br /><br /><br />
                        <h1 className='text-white'>Let's Test With <span style={{ color: "rgb(12, 223, 12)" }}>Green Apple</span></h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eveniet.</p>
                    </div>
                </div>
                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>
            </div>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className='mt-4'><h1>Featured Categories</h1></div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack direction={'row'} marginTop={"40px"} spacing={3}>
                        <h6>Cake & Milk</h6>
                        <h6>Coffe & Teas</h6>
                        <h6>Pet & Food</h6>
                        <h6>Vegitables</h6>

                    </Stack>
                </Grid>
            </Grid>
            {/* ========================================================================== */}
            <Grid container marginTop={"30px"} spacing={2}>
                <Grid item xs={6} md={2}>
                    <div className='text-center' style={{backgroundColor:"rgb(197, 255, 197)"}}>
                        <img src="https://nest-grocery.vercel.app/assets/category/cat-13.png" alt="" />
                        <h6>Cake & milk</h6>
                        <p>11 items</p>
                    </div>
                </Grid>
                <Grid item xs={6} md={2}>
                <div className='text-center' style={{backgroundColor:"rgb(252, 255, 203)"}}>
                        <img src="https://nest-grocery.vercel.app/assets/category/cat-12.png" alt="" />
                        <h6>Cake & milk</h6>
                        <p>20 items</p>

                    </div>
                </Grid>
                <Grid item xs={6} md={2}>
                <div className='text-center' style={{backgroundColor:"rgb(206, 255, 225)"}}>
                        <img src="https://nest-grocery.vercel.app/assets/category/cat-11.png" alt="" />
                        <h6>Cake & milk</h6>
                        <p>11 items</p>

                    </div>
                </Grid>
                <Grid item xs={6} md={2}>
                <div className='text-center' style={{backgroundColor:"rgb(255, 206, 206)"}}>
                        <img src="https://nest-grocery.vercel.app/assets/category/cat-9.png" alt="" />
                        <h6>Cake & milk</h6>
                        <p>10 items</p>

                    </div>
                </Grid>
                <Grid item xs={6} md={2}>
                <div className='text-center' style={{backgroundColor:"rgb(252, 255, 203)"}}>
                        <img src="https://nest-grocery.vercel.app/assets/category/cat-3.png" alt="" />
                        <h6>Cake & milk</h6>
                        <p>8 items</p>

                    </div>
                </Grid>
                <Grid item xs={6} md={2}>
                <div className='text-center' style={{backgroundColor:"rgb(255, 206, 206)"}}>
                        <img src="https://nest-grocery.vercel.app/assets/category/cat-2.png" alt="" />
                        <h6>Cake & milk</h6>
                        <p>6 items</p>

                    </div>
                </Grid>
            </Grid>
        </>
    );
}

