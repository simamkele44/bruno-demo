import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';

function Collections() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <CollectionContainer>
                <Row>
                <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t2.png"/>
                        </Thumbnail>
                        <Link to={`/detail/3`}>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        </Link>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>

                        </Shot>
                    
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t1.png"/>
                        </Thumbnail>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>
                        </Shot>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t3.png"/>
                        </Thumbnail>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>

                        </Shot>
                    </Col>
                    <Col xs={6} md={3} lg={3}>
                        <Shot className="d-block">
                        <Thumbnail>
                            <img src="/images/t4.png"/>
                        </Thumbnail>
                        <ShotInfo>
                            <ShotActions className="shot_actions">
                                <ShotTitle>
                                    <h6>A Letter Logo</h6>
                                </ShotTitle>
                                <ShotAction>
                                    <ShotSave>
                                        <img src="/images/saveicon.svg"/>
                                    </ShotSave>
                                    <ShotLike>
                                        <img src="/images/likesicon.svg"/>
                                    </ShotLike>
                                </ShotAction>
                            </ShotActions>
                        </ShotInfo>
                        <ShotSummary>
                            <ShotCreatorInfo>
                                    <img src="/images/profilepic.jpg"/>
                                    <h6>Creator</h6>
                                    <p className="shot_creator">TEAM</p>
                            </ShotCreatorInfo>
                            <ShotEngagement>
                                <ShotLikes>
                                    <img src="/images/likesicon.svg"/>
                                    <p>198</p>
                                </ShotLikes>
                                <ShotViews>
                                    <img src="/images/viewsicon.svg"/>
                                    <p>9.7k</p>
                                </ShotViews>
                            </ShotEngagement>
                        </ShotSummary>
                        </Shot>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <LoginButtons>
                            <div className="buttons_div">
                                <button className="btn btn-primary" type="button">Sign up to continue</button>
                                <a>or Sign in</a>
                            </div>
                        </LoginButtons>
                    </Col>
                </Row>
            </CollectionContainer>
            
        </div>
    
    )
}

export default Collections


const CollectionContainer = styled.div`
    padding: 0px 67px;
    margin-bottom: 80px;
    position: relative;

`;

const Shot = styled.div`
    position: relative;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;
const Thumbnail = styled.div`
    border-radius: 10px;
    img {
        border-radius: 10px;
        width: 100%;
    }
`;
const ShotInfo = styled.div`
`;
const ShotCreatorInfo = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;

    img {
        width: 25px;
        border-radius: 50%;
        height: 25px;
        margin-right: 10px;
    }

    h6 {
        color: rgba(0, 0, 0, 1);
        font-weight: 500;
        margin: 0;
        font-size: 15px;
        margin-right: 4px;
    }

    p {
        margin: 0;
        font-size: 10px;
        padding: 2px 6px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        color: #fff;
    }
`;

const ShotActions = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    padding: 100px 25px 0px 25px;
    border-radius: 8px;
    opacity: 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    height: 194px;

    &:hover {
        background: linear-gradient(
            180deg
            , transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%);
        opacity: 1;
    }
`;
const ShotTitle = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;

    h6 {
        color: #fff;
    }
`;
const ShotAction = styled.div`
    display: flex;
    align-items: center;
`;
const ShotSave = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    margin-right: 8px;
    background: rgba(249, 249, 249, 1);
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;

    img {
        width: 17px;
    }
`;
const ShotLike = styled.div`
    display: flex;
    align-items: center;
    background: rgba(249, 249, 249, 1);
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;

    img {
        width: 17px;
    }
`;

const ShotEngagement = styled.div`
    display: flex;
`;

const ShotSummary = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

`;
const ShotLikes = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    margin-right: 15px;

    img {
        margin-right: 6px;
    }
    p {
        margin: 0;
        font-size: 12px;
        font-weight: 450;
    }
`;
const ShotViews = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-right: 6px;
    }
    p {
        margin: 0;
        font-size: 12px;
        font-weight: 450;
    }
`;

const LoginButtons = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    .buttons_div {
        margin-top: 40px;

        button {
            background: #EA4C89;
            border-color: #EA4C89;
            font-size: 15px;
            padding: 8px 55px 8px 55px;
            border-radius: 8px;
            margin-right: 30px;

            &:hover {
                opacity: 0.8;
            }
        }

        a {
            color: #EA4C89;
            font-size: 14px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
                color: #EA4C89;
            }
        }
    }
`;

export {CollectionContainer, Shot, Thumbnail, ShotInfo, ShotCreatorInfo, ShotActions, ShotTitle, ShotAction, ShotSave, ShotLike, ShotEngagement, ShotSummary, ShotLikes, ShotViews, LoginButtons}



