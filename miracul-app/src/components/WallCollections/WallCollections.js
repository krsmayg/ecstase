import React, {useState,useEffect,Component} from 'react';
import {connect} from 'react-redux';
import {fetchCollections} from '../../actions/index';
import Spinner from '../UI/Spinner/Spinner'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const WallCollections = React.memo((props) => {
    useEffect(() => {
        props.fetchCollections();
    }, [])
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }
    const posterStyle = {
        
    }
    console.log("Recieve Collections: ", props.collections)
    const collections =  props.collections.map(col => {
        console.log("Collection: ", col)
        console.log('Posters: ', col.posters);
        const posters = col.posters.map(poster => (
            <div className="wall-poster-item" style={{width:"33.3%", padding: "0 14px", height: "100%"}}>
                <img src={`http://localhost:9000/images/posters/${poster.imageWall}`} />
            </div>
        ))
        return(
            <div className="collection-item" >
                <img src={`http://localhost:9000/images/collections/${col.imageCollection}`} style={{width:'100%', objectFit:'cover'}} />
                <div className="wall-poster-box" style={{position:'absolute', display: 'flex', top: '19%', left: '50%', transform: 'translateX(-50%)', width: '37%', height: '40%', justifyContent:'center'}}>
                    {posters}
                </div>
            </div>
        )
        
    });
    return (  
        <Swiper {...params}>
            {props.collections ? collections : <Spinner />}
        </Swiper>
    );
});
 
const mapStateToProps = state => {
    return {
        collections: state.collectionState.collections,
    }
}
export default connect(mapStateToProps, {fetchCollections})(WallCollections);