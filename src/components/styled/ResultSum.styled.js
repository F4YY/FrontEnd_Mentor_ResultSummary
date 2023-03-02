import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 10px;
`
export const Hstackflexi = styled(Hstack)`
    width: 738px;
    height: 520px;
    background-color: var(--White);
    border-radius: 35px;
    box-shadow: 0 25px 20px 20px hsl(221, 100%, 96%);
    @media screen and (max-width:960px) {
        width:auto;
        height:auto;
        margin:20px;
    }
    @media screen and (max-width:600px) {
        flex-direction: column;
        width:auto;
        height:auto;
        margin:-5px 0 20px;
    }
`
//Styled for left side:
export const Leftside = styled(Vstack)`
    width: 369px;
    height: 520px;
    border-radius: 35px;
    background: linear-gradient(180deg, var(--Light-slate-blue-background),var(--Light-royal-blue-background));
    text-align: center;
    @media screen and (max-width:960px) {
        width:auto;
        height:auto;
    }
    @media screen and (max-width:600px) {
        width:auto;
        height:auto;
        border-radius: 0 0 35px 35px;
    }
`
export const Circlenum = styled(Vstack)`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    background: linear-gradient(180deg, var(--Violet-blue-circle), var(--Persian-blue-circle));
`
//Styled for right side:
export const Rightside = styled.div`
    width: 293px;
    height: 520px;
    padding: 37px;
    border-radius: 0 35px 35px 0;
    @media screen and (max-width:960px) {
        padding: 20px;
        width:80%;
        height:auto;
    }
    @media screen and (max-width:600px) {
        padding: 30px;
        width:auto;
        height:auto;
    }
`
export const Styledinfo = styled(Hstack)`
    width: 290px;
    height: 57px;
    font-weight: var(--semibold);
    border-radius: 8px;
    align-items: center;
    color: ${(col)=>col.$color};
    background-color: ${(bg)=>bg.$bgcol};
    margin: 0 0 15px 0;
    justify-content: space-between;
    @media screen and (max-width:960px) {
        width:auto;
    }
    @media screen and (max-width: 600px) {
        width:100%;
        margin: 0 auto 15px;
    }
`
export const Iconinfo= styled.img`
    margin-right: 10px;
`
export const Styledbutton = styled.button`
    width: 290px;
    height: 55px;
    border-radius: 30px;
    border-style: none;
    font-size: .95em;
    font-weight: var(--semibold);
    color: var(--White);
    background-color: var(--Dark-gray-blue);
    margin-top: 35px;
    cursor: pointer;
    :hover{
        background: linear-gradient(180deg, var(--Light-slate-blue-background),var(--Light-royal-blue-background));
    }
    :active{
        color:var(--Dark-gray-blue);
        border:1px solid var(--Dark-gray-blue);
        background: linear-gradient(0deg, var(--Pale-blue),var(--Light-lavender));
    }
    @media screen and (max-width:960px) {
        width:100%;
    }
    @media screen and (max-width: 600px) {
        width:100%;
        margin: 35px auto 0;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`